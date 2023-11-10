import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from 'src/skills/entities/skill.entity';
import { SkillsService } from 'src/skills/skills.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { AddSkillCvDto } from './dto/add-skill-cv.dto';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';
import { CrudService } from 'src/common-module/GenericCRUD';

@Injectable()
export class CvsService extends CrudService<Cv>{
  constructor(
    @InjectRepository(Cv)
    private readonly cvRepository: Repository<Cv>,

    private readonly skillService: SkillsService,
  ) {
    super(cvRepository);
  }

  async createcv(createCvDto: CreateCvDto, user: UserEntity) :Promise<Cv>{
    const newCv = await this.cvRepository.create(createCvDto)
    newCv.user = user;
    return this.cvRepository.save(newCv);
  }

  async addSkill(id: string, addSkillDto: AddSkillCvDto) {
    const skill = await this.skillService.findOne(addSkillDto.skillId);
    const cv = await this.cvRepository.findOneBy({id});
    cv.skills.push(skill)
    return this.cvRepository.save(cv);
  }
  update(id: string, updateCvDto: UpdateCvDto) {
    return this.cvRepository.update(id,updateCvDto)
  }

}
