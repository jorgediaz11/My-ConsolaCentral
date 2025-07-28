import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docente } from './docente.entity';
import { CreateDocenteDto } from './dto/CreateDocenteDto';
import { UpdateDocenteDto } from './dto/UpdateDocenteDto';

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docente)
    private docentesRepository: Repository<Docente>,
  ) {}

  // Listar todos los docentes
  findAll(): Promise<Docente[]> {
    return this.docentesRepository.find({ where: { id_perfil: 3 } });
  }

  // Obtener un docente por ID
  async findOne(id: number): Promise<Docente | null> {
    return this.docentesRepository.findOneBy({ id_docente: id });
  }

  // Crear un docente
  async create(dto: CreateDocenteDto): Promise<Docente> {
    const docente = this.docentesRepository.create(dto);
    return await this.docentesRepository.save(docente);
  }

  // Actualizar un docente por ID
  async update(
    id_docente: number,
    dto: UpdateDocenteDto,
  ): Promise<Docente | null> {
    await this.docentesRepository.update(id_docente, dto);
    return this.findOne(id_docente);
  }

  // Eliminar un docente por ID
  async remove(id_docente: number): Promise<void> {
    await this.docentesRepository.delete(id_docente);
  }

  // Listar docentes con perfil docente (id_perfil = 3)
  async findAllDocentes(): Promise<any[]> {
    return this.docentesRepository.find({
      where: { id_perfil: 3 },
      select: [
        'nombres',
        'apellido',
        'correo',
        'telefono',
        'direccion',
        'fecha_nacimiento',
        'estado',
        'docente_titulo',
        'foto_perfil',
        'ultimo_acceso',
      ],
    });
  }

  // Listar docentes por colegio
  async findByColegio(id_colegio: number): Promise<Docente[]> {
    return this.docentesRepository.find({ where: { id_colegio } });
  }
}
