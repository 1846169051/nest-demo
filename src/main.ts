import { NestFactory} from '@nestjs/core';
import {nextTick} from 'process';
import { AppModule } from './app.module';
import * as cors from 'cors';

const port: number =3000;
/**
 * 全局中间件
 * @ngdoc module
 * @param req
 * @param res
 * @param next
 * @constructor
 */
function MiddlewareAll(req:any,res:any,next:any):void {
  console.log(req.url,'全局中间件------------------------------------------------');
  next();
}

async function bootstrap():Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  app.use(MiddlewareAll); //全局中间件
  app.setGlobalPrefix('api');  //增加全局前缀
  await app.listen(port);  //热重载
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log('启动:'+'http://localhost:'+port);
}

bootstrap();
