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

  // Listar todos los editores
  findAll(): Promise<Editor[]> {
    return this.editoresRepository.find({ where: { id_perfil: 6 } });
  }

  // Obtener un editor por ID
  async findOne(id: number): Promise<Editor | null> {
    return this.editoresRepository.findOneBy({ id_editor: id });
  }

  // Crear un editor
  async create(dto: CreateEditorDto): Promise<Editor> {
    const editor: Editor = this.editoresRepository.create(dto);
    return await this.editoresRepository.save(editor);
  }

  // Actualizar un editor
  async update(id: number, dto: UpdateEditorDto): Promise<Editor | null> {
    await this.editoresRepository.update(id, dto);
    return this.findOne(id);
  }

  // Eliminar un editor
  async remove(id: number): Promise<void> {
    await this.editoresRepository.delete(id);
  }

  // Buscar editores con perfil docente (id_perfil = 6)
  async findAllEditores(): Promise<any[]> {
    return this.editoresRepository.find({
      where: { id_perfil: 6 },
      select: [
        'nombres',
        'apellido',
        'correo',
        'telefono',
        'direccion',
        'fecha_nacimiento',
        'estado',
        //'docente_titulo',
        'foto_perfil',
        'ultimo_acceso',
      ],
    });
  }

  // Listar docentes por colegio
  async findByColegio(id_colegio: number): Promise<Editor[]> {
    return this.editoresRepository.find({ where: { id_colegio } });
  }
}
