import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AddTodoDto } from './DTO/add-todo.dto';
import { TodoService } from './todomodule.service';
import { Todo } from './entities/todo.entity';
import { UpdateTodoTdo } from './DTO/update-todo.dto';
@Controller('todomodule')
export class TodomoduleController {
    constructor(private todoservice : TodoService){
    }
    @Post("/add")
    createTodo(@Body() body: AddTodoDto):Todo{
        return this.todoservice.addTodo(body);
    }
    @Post("/adddb")
    createTodo_2(@Body() body: AddTodoDto){
        return this.todoservice.addTodo_2(body);
    }
    @Patch("/update")
    updateTodo(@Body() body : UpdateTodoTdo){
        return this.todoservice.updateTodo(body);
    }
    @Delete('/delete/:id')
  deleteTodo(@Param('id') id: string) {
       this.todoservice.deleteTodo(id);
    }
    @Delete('/deletesoft/:id')
    softdeleteTodo(@Param('id') id: string) {
         this.todoservice.softdeleteTodo(id);
      }
    @Post("/restore/:id")
    restoreTodo(@Param('id') id: string){
        this.todoservice.restoreTodo(id);
    }
    @Get("/status")
    getStatsTodoDb(){
        return this.todoservice.getStatus();
    }
    @Get("/todos")
    getAll(){
        return this.todoservice.getAllTodos();
    }
    @Get('/:id')
    getById(@Param('id') id: string){
        return this.todoservice.getById(id);
    }
  }

