import { hashSync } from 'bcrypt';
import { ValueTransformer } from 'typeorm';

export class PasswordTransformer implements ValueTransformer {
  to(value: string) {
    return hashSync(value, 10);
  }
  from(value: string) {
    return value;
  }
}
