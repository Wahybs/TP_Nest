
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from './DTO/add-todo.dto';
import { Todo } from './entities/todo.entity';
import { CommonModuleService } from 'src/common-module/common-module.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatsEnum } from './Enums/StatsEnum';
import { UpdateTodoTdo } from './DTO/update-todo.dto';
import { PaginatedTodoDto } from './DTO/paginated.dto';

@Injectable() 
export class TodoService { 
    @Inject(CommonModuleService ) uuid: any;
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepo: Repository<Todo>,
    ){}

    private todo_array: Array<Todo> = [];

    addTodo(addTodo: AddTodoDto): Todo {
        const todo =new Todo();
        todo.id=this.uuid.generateUUID();
        todo.name=addTodo.name;
        todo.description=addTodo.description;
        todo.status=StatsEnum.waiting;
        this.todo_array.push(todo);
        return todo;
      }
      addTodo_2(addTodo: AddTodoDto): Promise <Todo> {
        const todo =new Todo();
        todo.id=this.uuid.generateUUID();
        todo.name=addTodo.name;
        todo.description=addTodo.description;
        todo.status=StatsEnum.waiting;
        
        return this.todoRepo.save(todo);
      }
      async updateTodo(updateTodo:UpdateTodoTdo){
        const val = await this.todoRepo.findOneBy({id: updateTodo.id});
        if(!val) throw new NotFoundException("Todo doesn't exist.")

        val.description = updateTodo.description ?? val.description;
        val.name = updateTodo.name ?? val.name;
        val.status = updateTodo.status ?? val.status;

        return this.todoRepo.save(val);
      }
      async deleteTodo(id: string) {
        const todo = await this.todoRepo.findOneBy({id});
    
        if (!todo) {
          throw new NotFoundException(`Todo with ID ${id} not found.`);
        }
    
        await this.todoRepo.remove(todo);
      
    }
     async softdeleteTodo(id: string){
        const todo = await this.todoRepo.findOneBy({id})
        
        if(!todo) throw new NotFoundException("Todo doesn't exist.")
        return await  this.todoRepo.softDelete(id)
      
     }
     async restoreTodo(id: string) {
        return await this.todoRepo.restore(id);
        }

    async getStatus(){
          return {
              actif: await this.todoRepo.countBy({status: StatsEnum.actif}),
              done: await this.todoRepo.countBy({status: StatsEnum.done}),
              waiting: await this.todoRepo.countBy({status: StatsEnum.waiting}),
          }}
    async getAllTodos() {
         return this.todoRepo.find();
  }
  async getById(id: string) {
    const todo = await this.todoRepo.findOne({ where: [{ id }] });
    if(!todo) throw new BadRequestException("Todo Not Found");
    return todo
}
  async getAll(status:StatsEnum, data:string){
    const queryBuilder = this.todoRepo.createQueryBuilder("todo");
    if(data) 
      queryBuilder.where("todo.name Like :data", { data: `%${data}%` })
        .orWhere("todo.description Like :data", { data: `%${data}%` })
    if(status) queryBuilder.orWhere("todo.status= :statusParam", { statusParam: status });
    
    return await queryBuilder.getMany();
  }

  async getPaginated(data: PaginatedTodoDto){
    return await this.todoRepo.find({
      select:[],
      skip:data.page ,
      take:data.item
    }
    )
  }

}