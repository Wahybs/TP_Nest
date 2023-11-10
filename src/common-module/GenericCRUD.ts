import { Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { HasIdInterface } from './id-interface';

@Injectable()
export class CrudService<T extends HasIdInterface> {
  constructor(private repository: Repository<T>) {}
  create(entity: DeepPartial<T>) {
    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id) {
    return this.repository.findOne({ where: { id } });
  }

    remove(id) {
     return this.repository.delete(id);
    }
}