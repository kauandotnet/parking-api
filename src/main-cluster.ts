import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cluster from 'node:cluster';
import { cpus } from 'node:os';

import { DtoTransformInterceptor } from '@/common/interceptors/dto-transform.interceptor';

import { AppModule } from './app.module';

const numCPUs = cpus().length;

const onWorkerError = (code: string, signal: string) =>
  console.error(code, signal);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
      forbidUnknownValues: true,
      skipMissingProperties: false,
      transform: true,
    }),
  );

  app.useGlobalInterceptors(new DtoTransformInterceptor());

  if (configService.get('SERVER.environment') === 'development') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Parking API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup('api/documentation', app, swaggerDocument);
  }

  await app.listen(configService.get('SERVER.port'));
}

if (cluster.isPrimary && numCPUs > 1) {
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    worker.on('error', onWorkerError);
  }

  cluster.on('exit', () => {
    const newWorker = cluster.fork();
    newWorker.on('error', onWorkerError);
    console.error('new worker: ', newWorker.process.pid);
  });
  cluster.on('exit', console.error);
} else {
  bootstrap();
}
