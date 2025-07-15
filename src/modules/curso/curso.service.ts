import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';
import { CreateCursoDto } from './dto/CreateCursoDto';
import { UpdateCursoDto } from './dto/UpdateCursoDto';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}

  findAll(): Promise<Curso[]> {
    return this.cursoRepository.find({ relations: ['area', 'grado'] });
  }

  findOne(id: number): Promise<Curso | null> {
    return this.cursoRepository.findOne({
      where: { id_curso: id },
      relations: ['area', 'grado'],
    });
  }

  async create(dto: CreateCursoDto): Promise<Curso> {
    const curso = this.cursoRepository.create(dto);
    return await this.cursoRepository.save(curso);
  }

  async update(id: number, dto: UpdateCursoDto): Promise<Curso | null> {
    await this.cursoRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cursoRepository.delete(id);
  }
}
