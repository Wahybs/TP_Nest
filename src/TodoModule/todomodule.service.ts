
import { Inject, Injectable } from '@nestjs/common';
import { AddTodoDto } from './DTO/add-todo.dto';
import { Todo } from './entities/todo.entity';
import { CommonModuleService } from 'src/common-module/common-module.service';
//import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';
import { StatsEnum } from './Enums/StatsEnum';

@Injectable() 
export class TodoService {
    @Inject(CommonModuleService ) uuid: any;
   /* constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ){}*/

    private todos: Array<Todo> = [];

    addTodo(addTodo: AddTodoDto): Todo {
        const todo =new Todo();
        todo.id=this.uuid.generateUUID();
        todo.name=addTodo.name;
        todo.description=addTodo.description;
        todo.status=StatsEnum.waiting;
        this.todos.push(todo);
        return todo;
      }

}