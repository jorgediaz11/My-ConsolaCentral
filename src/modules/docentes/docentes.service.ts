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

  findAll(): Promise<Docente[]> {
    return this.docentesRepository.find();
  }

  async create(createDocenteDto: CreateDocenteDto): Promise<Docente> {
    const docente = this.docentesRepository.create(createDocenteDto);
    return await this.docentesRepository.save(docente);
  }

  // Obtener un docente por ID
  async findOne(id: number): Promise<Docente | null> {
    return this.docentesRepository.findOneBy({ id_docente: id });
  }

  // Actualizar un docente por ID
  async update(
    id: number,
    updateDocenteDto: UpdateDocenteDto,
  ): Promise<Docente | null> {
    await this.docentesRepository.update(id, updateDocenteDto);
    return this.findOne(id);
  }

  // Eliminar un docente por ID
  async remove(id: number): Promise<void> {
    await this.docentesRepository.delete(id);
  }

  // Buscar docentes por colegio
  async findByColegio(id_colegio: number): Promise<Docente[]> {
    return this.docentesRepository.find({ where: { id_colegio } });
  }
}
