import { Module } from '@nestjs/common';
import { StudentfeesService } from './studentfees.service';
import { StudentfeesController } from './studentfees.controller';

@Module({
  controllers: [StudentfeesController],
  providers: [StudentfeesService]
})
export class StudentfeesModule {}
