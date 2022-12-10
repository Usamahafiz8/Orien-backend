import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentfeeDto } from './create-studentfee.dto';

export class UpdateStudentfeeDto extends PartialType(CreateStudentfeeDto) {}
