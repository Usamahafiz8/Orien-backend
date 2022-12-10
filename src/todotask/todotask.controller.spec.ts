import { Test, TestingModule } from '@nestjs/testing';
import { TodotaskController } from './todotask.controller';
import { TodotaskService } from './todotask.service';

describe('TodotaskController', () => {
  let controller: TodotaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodotaskController],
      providers: [TodotaskService],
    }).compile();

    controller = module.get<TodotaskController>(TodotaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
