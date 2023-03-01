import { registerAs } from '@nestjs/config';

export const serverConfig = registerAs('SERVER', () => ({
  environment: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  cors: {
    origin: process.env.ORIGIN_CORS ?? `http://localhost:${serverConfig.port}`,
  },
}));
