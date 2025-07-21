import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cursos } from './cursos.entity';
import { CreateCursosDto } from './dto/CreateCursosDto';
import { UpdateCursosDto } from './dto/UpdateCursosDto';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Cursos)
    private cursosRepository: Repository<Cursos>,
  ) {}

  findAll(): Promise<Cursos[]> {
    return this.cursosRepository.find({ relations: ['area', 'grado'] });
  }

  findOne(id: number): Promise<Cursos | null> {
    return this.cursosRepository.findOne({
      where: { id_curso: id },
      relations: ['area', 'grado'],
    });
  }

  async create(dto: CreateCursosDto): Promise<Cursos> {
    const curso = this.cursosRepository.create(dto);
    return await this.cursosRepository.save(curso);
  }

  async update(id: number, dto: UpdateCursosDto): Promise<Cursos | null> {
    await this.cursosRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cursosRepository.delete(id);
  }

  // Ejemplo: filtrar por tipo_curso e id_colegio
  async findByTipoYColegio(
    tipo_curso: string,
    id_colegio: number,
  ): Promise<Cursos[]> {
    return this.cursosRepository.find({ where: { tipo_curso, id_colegio } });
  }
}
