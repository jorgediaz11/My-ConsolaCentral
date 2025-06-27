import { PartialType } from '@nestjs/mapped-types';
import { CreateEditorDto } from './CreateEditorDto';

export class UpdateEditorDto extends PartialType(CreateEditorDto) {}
