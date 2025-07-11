import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Editor } from './editor.entity';
import { CreateEditorDto } from './dto/CreateEditorDto';
import { UpdateEditorDto } from './dto/UpdateEditorDto';

@Injectable()
export class EditoresService {
  constructor(
    @InjectRepository(Editor)
    private editoresRepository: Repository<Editor>,
  ) {}

  findAll(): Promise<Editor[]> {
    return this.editoresRepository.find();
  }

  async create(createEditorDto: CreateEditorDto): Promise<Editor> {
    const editor = this.editoresRepository.create(createEditorDto);
    return await this.editoresRepository.save(editor);
  }

  // Obtener un editor por ID
  async findOne(id: number): Promise<Editor | null> {
    return this.editoresRepository.findOneBy({ id_editor: id });
  }

  // Actualizar un editor
  async update(
    id: number,
    updateEditorDto: UpdateEditorDto,
  ): Promise<Editor | null> {
    await this.editoresRepository.update(id, updateEditorDto);
    return this.findOne(id);
  }

  // Eliminar un editor
  async remove(id: number): Promise<void> {
    await this.editoresRepository.delete(id);
  }
}
