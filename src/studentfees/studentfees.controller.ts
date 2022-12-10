import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentfeesService } from './studentfees.service';
import { CreateStudentfeeDto } from './dto/create-studentfee.dto';
import { UpdateStudentfeeDto } from './dto/update-studentfee.dto';

@Controller('studentfees')
export class StudentfeesController {
  constructor(private readonly studentfeesService: StudentfeesService) {}

  @Post()
  create(@Body() createStudentfeeDto: CreateStudentfeeDto) {
    return this.studentfeesService.create(createStudentfeeDto);
  }

  @Get()
  findAll() {
    return this.studentfeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentfeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentfeeDto: UpdateStudentfeeDto) {
    return this.studentfeesService.update(+id, updateStudentfeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentfeesService.remove(+id);
  }
}
