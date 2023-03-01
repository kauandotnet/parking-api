import { AuthConfigInterface } from '@modules/auth/interfaces/auth-config.interface';
import { registerAs } from '@nestjs/config';

export const authConfig = registerAs(
  'AUTH',
  (): AuthConfigInterface => ({
    resetToken: {
      ttl: Number(process.env.AUTH_RESET_TOKEN_TTL ?? 120),
    },
  }),
);
