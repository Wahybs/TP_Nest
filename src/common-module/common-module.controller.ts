/* eslint-disable prettier/prettier */
import { Controller , Get} from '@nestjs/common';
import { CommonModuleService } from './common-module.service';

@Controller('common-module')
export class CommonModuleController {
constructor(private  commonService: CommonModuleService) {}
    @Get('uuid')
    getUUID(): string {
      return this.commonService.generateUUID();
    }
}
