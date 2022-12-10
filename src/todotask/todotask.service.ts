import { Injectable } from '@nestjs/common';
import { CreateTodotaskDto } from './dto/create-todotask.dto';
import { UpdateTodotaskDto } from './dto/update-todotask.dto';

@Injectable()
export class TodotaskService {
  create(createTodotaskDto: CreateTodotaskDto) {
    return 'This action adds a new todotask';
  }

  findAll() {
    return `This action returns all todotask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todotask`;
  }

  update(id: number, updateTodotaskDto: UpdateTodotaskDto) {
    return `This action updates a #${id} todotask`;
  }

  remove(id: number) {
    return `This action removes a #${id} todotask`;
  }
}
