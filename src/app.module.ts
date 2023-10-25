/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module,NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModuleModule } from './common-module/common-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './TodoModule/entities/todo.entity';
import { UserModule } from './user/user.module';
import { CvsModule } from './cvs/cvs.module';
import { SkillsModule } from './skills/skills.module';
import { AuthentificationMiddleware } from './authentification/authetification.middleware';
import { TodoModuleModule } from './TodoModule/todomodule.module';
import { UserEntity } from './user/entities/user.entity';
import { Skill } from './skills/entities/skill.entity';
import { Cv } from './cvs/entities/cv.entity';

@Module({
  imports: [TodoModuleModule,
    CommonModuleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: [Todo, UserEntity,Skill,Cv],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    CvsModule,
    SkillsModule],
  controllers: [ AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthentificationMiddleware)
      .forRoutes(
        "todo", 
        "v2/todo",
        "cvs",
        "skills",
        "users",
      )
  } }

