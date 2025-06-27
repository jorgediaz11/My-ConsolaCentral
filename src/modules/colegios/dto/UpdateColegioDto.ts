import { PartialType } from '@nestjs/mapped-types';
import { CreateColegioDto } from './CreateColegioDto';

export class UpdateColegioDto extends PartialType(CreateColegioDto) {}
