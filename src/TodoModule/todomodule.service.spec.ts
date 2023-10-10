import { Test, TestingModule } from '@nestjs/testing';
import { TodomoduleService } from './todomodule.service';

describe('TodomoduleService', () => {
  let service: TodomoduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodomoduleService],
    }).compile();

    service = module.get<TodomoduleService>(TodomoduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
