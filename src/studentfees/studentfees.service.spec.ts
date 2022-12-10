import { Test, TestingModule } from '@nestjs/testing';
import { StudentfeesService } from './studentfees.service';

describe('StudentfeesService', () => {
  let service: StudentfeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentfeesService],
    }).compile();

    service = module.get<StudentfeesService>(StudentfeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
