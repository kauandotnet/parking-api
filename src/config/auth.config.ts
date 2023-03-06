import { registerAs } from '@nestjs/config';

import { AuthConfigInterface } from '@/core/auth/interfaces/auth-config.interface';

export const authConfig = registerAs(
  'AUTH',
  (): AuthConfigInterface => ({
    resetToken: {
      ttl: Number(process.env.AUTH_RESET_TOKEN_TTL ?? 120),
    },
  }),
);
