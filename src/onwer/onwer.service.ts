import { Injectable } from '@nestjs/common';
import { Onwer } from './entities/onwer.entity';

@Injectable()
export class OnwerService {
  public admin:Onwer[]=[{
    username: "Osama",
    password: "Osama",
  }]

getadmin(username:string) : Onwer{
  return this.admin.find((admin)=>admin.username===username)
}

}