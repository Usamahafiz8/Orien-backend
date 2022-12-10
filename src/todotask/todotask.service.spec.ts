import { Test, TestingModule } from '@nestjs/testing';
import { TodotaskService } from './todotask.service';

describe('TodotaskService', () => {
  let service: TodotaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodotaskService],
    }).compile();

    service = module.get<TodotaskService>(TodotaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
