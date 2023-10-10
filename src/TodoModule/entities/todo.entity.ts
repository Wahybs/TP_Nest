/* eslint-disable prettier/prettier */
import { Column,  Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatsEnum } from '../Enums/StatsEnum';
import { Abstodo } from './abstodo.entity';
@Entity('todo')
export class Todo extends Abstodo {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    name:'name',
    length:50,
    type: "varchar",   
    })
     name:string;
@Column({
 type: "varchar",}
)
 description: string;
@Column({
    type: "enum",
    enum: StatsEnum,
    default: StatsEnum.waiting
})
status: StatsEnum;

}