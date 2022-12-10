import { Test, TestingModule } from '@nestjs/testing';
import { StudentfeesController } from './studentfees.controller';
import { StudentfeesService } from './studentfees.service';

describe('StudentfeesController', () => {
  let controller: StudentfeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentfeesController],
      providers: [StudentfeesService],
    }).compile();

    controller = module.get<StudentfeesController>(StudentfeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
