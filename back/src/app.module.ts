import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TaskModule, AuthModule],
  controllers: [AppController, UserController, TaskController, AuthController],
  providers: [AppService, UserService],
})
export class AppModule {}
