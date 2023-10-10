/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModuleModule } from './common-module/common-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './TodoModule/entities/todo.entity';

import { TodoModuleModule } from './TodoModule/todomodule.module';

@Module({
  imports: [TodoModuleModule,CommonModuleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: [Todo],
      synchronize: false,
      logging: true,
    })],
  controllers: [ AppController],
  providers: [AppService],
})
export class AppModule { }
