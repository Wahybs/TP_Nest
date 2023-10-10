/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo }from 'src/TodoModule/entities/todo.entity';
import { TodomoduleController } from './todomodule.controller';
import { TodoService } from './todomodule.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [Todo]
    )
  ],
  controllers: [TodomoduleController],
  providers: [TodoService]
})
export class TodoModuleModule {}