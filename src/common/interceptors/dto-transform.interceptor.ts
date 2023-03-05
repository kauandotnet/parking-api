import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DtoTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const controller = context.getClass();
    const inst = new controller();
    const method = context.getHandler();
    const metadata = Reflect.getMetadata(
      'design:returntype',
      inst,
      method.name,
    );

    return next.handle().pipe(
      map((data) => {
        return plainToInstance(metadata, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
