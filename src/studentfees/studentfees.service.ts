import { Injectable } from '@nestjs/common';
import { CreateStudentfeeDto } from './dto/create-studentfee.dto';
import { UpdateStudentfeeDto } from './dto/update-studentfee.dto';

@Injectable()
export class StudentfeesService {
  create(createStudentfeeDto: CreateStudentfeeDto) {
    return 'This action adds a new studentfee';
  }

  findAll() {
    return `This action returns all studentfees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentfee`;
  }

  update(id: number, updateStudentfeeDto: UpdateStudentfeeDto) {
    return `This action updates a #${id} studentfee`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentfee`;
  }
}
