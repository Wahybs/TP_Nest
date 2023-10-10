import { Test, TestingModule } from '@nestjs/testing';
import { TodomoduleController } from './todomodule.controller';

describe('TodomoduleController', () => {
  let controller: TodomoduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodomoduleController],
    }).compile();

    controller = module.get<TodomoduleController>(TodomoduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
