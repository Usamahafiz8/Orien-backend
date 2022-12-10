import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { OnwerModule } from 'src/onwer/onwer.module';

@Module({
  imports:[OnwerModule],
  controllers: [AuthController ],
})
export class AuthModule {}
