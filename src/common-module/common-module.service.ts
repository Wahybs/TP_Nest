import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
@Injectable()
export class CommonModuleService {
  static id: any;
  generateUUID(): string {
    return uuid.v4();
  }
}
