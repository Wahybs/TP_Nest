import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AddTodoDto } from './DTO/add-todo.dto';
import { TodoService } from './todomodule.service';
import { Todo } from './entities/todo.entity';
import { UpdateTodoTdo } from './DTO/update-todo.dto';
import { StatsEnum } from './Enums/StatsEnum';
import { PaginatedTodoDto } from './DTO/paginated.dto';
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
    
    @Get('/qb')
    getAllQB( @Query('status') status: StatsEnum, @Query('data') data: string): Promise<Todo[]> {
       const searchCriteria = {
         status: status || '',
         data: data || ''};
            return this.todoservice.getAll(status,data);
    }
    @Get('/search')
    getpaginated(@Query() mesQueryParams: PaginatedTodoDto){
            return this.todoservice.getPaginated(mesQueryParams);
    }
    @Get('/:id')
    getById(@Param('id') id: string){
        return this.todoservice.getById(id);
    }
    
  }

