/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AddTodoDto } from './DTO/add-todo.dto';
import { TodoService } from './todomodule.service';
@Controller('todomodule')
export class TodomoduleController {
    constructor(private todoservice : TodoService){
    }
    @Post()
    createTodo(@Body() body: AddTodoDto){
        return this.todoservice.addTodo(body);
    }
    
}
