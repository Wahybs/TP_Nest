import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { UserService } from "src/user/user.service";
import { CvsService } from "./cvs/cvs.service";
import { SkillsService } from "./skills/skills.service";
import { UserEntity } from "./user/entities/user.entity";
import { randEmail, randFilePath, randFirstName, randJobTitle, randLastName, randNumber, randPassword, randSkill, randUserName } from '@ngneat/falso';
import { Cv } from "./cvs/entities/cv.entity";
import { Skill } from "./skills/entities/skill.entity";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    const userService = app.get(UserService);
    const skillService = app.get(SkillsService);
    const cvService = app.get(CvsService);

    const users: UserEntity[] = []
    for (let i = 0; i < 20; i++) {
        const user = await userService.create({
            email: randEmail(),
            password: randPassword(),
            username: randUserName(),
        });
        users.push(user)
    }

    const skills: Skill[] = []
    for (let i = 0; i < 20; i++) {
        const skill = new Skill();
        skill.designation = randSkill();
        await skillService.create(skill);
        skills.push(skill);
    }

    for (let i = 0; i < 20; i++) {
        const cv = new Cv();
        cv.age = randNumber({ min: 18, max: 100 });
        cv.job = randJobTitle();
        cv.firstname = randFirstName();
        cv.name = randLastName();
        cv.path = randFilePath();
        cv.cin = randNumber({ min: 10000000, max: 99999999 }).toString();
        
        const owner = users[randNumber({min: 0, max: users.length})];
        const randSkill = skills[randNumber({min: 0, max: skills.length})];
        await cvService.create(cv, owner);
        await cvService.addSkill(cv.id, {skillId: randSkill.id});
    }
    await app.close()
}

bootstrap();
