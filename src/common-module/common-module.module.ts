/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { CommonModuleController } from './common-module.controller';
import { CommonModuleService } from './common-module.service';
@Global()
@Module({ 
    providers:[CommonModuleService] ,
    exports:[  CommonModuleService], 
    controllers: [CommonModuleController],})
export class CommonModuleModule {}
