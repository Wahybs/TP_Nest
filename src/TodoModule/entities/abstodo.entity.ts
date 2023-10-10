/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity('todo')
export class Abstodo {
@Column()
@CreateDateColumn({update:false}) 
createdAt: Date; 
@UpdateDateColumn()
  updatedAt: Date; 
  @DeleteDateColumn()
  deletedAt: Date | null;
}