import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'qq',
      retryDelay:500,
      retryAttempts:10,
      synchronize:true,
      autoLoadEntities:true
    }),
    UserModule,
    VideoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
