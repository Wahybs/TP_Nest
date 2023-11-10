import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CrudService } from 'src/common-module/GenericCRUD';

@Injectable()
export class UserService extends CrudService<UserEntity>{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async create(createUserDto: CreateUserDto) {
    const user = new UserEntity();
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.hash = bcrypt.genSaltSync();
    user.password = await bcrypt.hash(createUserDto.password, user.hash);
    return this.userRepository.save(user);
  }


  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: [{ id: id }] });
    if(updateUserDto.password){
      user.hash = bcrypt.genSaltSync();
      user.password = await bcrypt.hash(updateUserDto.password, user.hash);
    }
    user.email = updateUserDto.email ?? user.email;
    user.username = updateUserDto.username ?? user.username;
    return this.userRepository.save(user);
  }
}
