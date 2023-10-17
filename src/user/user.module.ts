import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './entity/user.entity';
import  { CounterMiddleware } from '../counter/counter.middleware'

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  //user局部中间件
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(CounterMiddleware).forRoutes('user')//起作用的路径
  }
}
