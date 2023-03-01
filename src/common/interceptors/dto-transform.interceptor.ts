import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass, plainToInstance } from 'class-transformer';
import { CustomerDto } from '@modules/customer/dto/customer.dto';
import { CustomerController } from '@modules/customer/customer.controller';

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

    console.log(metadata, 'target');
    return next.handle();
    // return next.handle().pipe(
    //   map((data) => {
    //     return plainToInstance(metadata, data, {
    //       excludeExtraneousValues: true,
    //     });
    //   }),
    // );
  }
}
