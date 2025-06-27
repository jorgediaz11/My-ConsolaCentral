import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './CreateEstudianteDto';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {}
