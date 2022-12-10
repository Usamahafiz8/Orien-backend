import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodotaskService } from './todotask.service';
import { CreateTodotaskDto } from './dto/create-todotask.dto';
import { UpdateTodotaskDto } from './dto/update-todotask.dto';

@Controller('todotask')
export class TodotaskController {
  constructor(private readonly todotaskService: TodotaskService) {}

  @Post()
  create(@Body() createTodotaskDto: CreateTodotaskDto) {
    return this.todotaskService.create(createTodotaskDto);
  }

  @Get()
  findAll() {
    return this.todotaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todotaskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodotaskDto: UpdateTodotaskDto) {
    return this.todotaskService.update(+id, updateTodotaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todotaskService.remove(+id);
  }
}
