import { PartialType } from '@nestjs/mapped-types';
import { CreateDocenteDto } from './CreateDocenteDto';

export class UpdateDocenteDto extends PartialType(CreateDocenteDto) {}
