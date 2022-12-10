import {
  Controller,
  Post,
  Req,
} from '@nestjs/common';
import { Onwer } from 'src/onwer/entities/onwer.entity';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('/login')
  getHello(@Req() req) {
    const admin: Onwer = req.admin;
    const payload = {
      username: 'Osma', //admin.Username,
      password: 'Osama', //admin.password,
    };
    return 'Welcome';
  }
}
