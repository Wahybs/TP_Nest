import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
import { CrudService } from 'src/common-module/GenericCRUD';

@Injectable()
export class SkillsService extends CrudService <Skill> {
  constructor(
    @InjectRepository(Skill)
    private skillRepository : Repository<Skill>
    
  ) {
    super(skillRepository);
  }

  create(createSkillDto: CreateSkillDto) {
    const skill = this.skillRepository.create(createSkillDto)
    return this.skillRepository.save(skill)
  }
  update(id: string, updateSkillDto: UpdateSkillDto) {
    return  this.skillRepository.update(id, updateSkillDto);
  }
 
}
