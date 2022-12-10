import { Module } from '@nestjs/common';
import { TodotaskService } from './todotask.service';
import { TodotaskController } from './todotask.controller';

@Module({
  controllers: [TodotaskController],
  providers: [TodotaskService]
})
export class TodotaskModule {}
