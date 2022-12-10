import { PartialType } from '@nestjs/mapped-types';
import { CreateTodotaskDto } from './create-todotask.dto';

export class UpdateTodotaskDto extends PartialType(CreateTodotaskDto) {}
