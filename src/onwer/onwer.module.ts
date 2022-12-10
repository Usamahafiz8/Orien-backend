import { Module } from '@nestjs/common';
import { OnwerService } from './onwer.service';

@Module({
  providers: [OnwerService],
  exports: [OnwerService],
})
export class OnwerModule {}
