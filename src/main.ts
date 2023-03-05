import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

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

bootstrap();
