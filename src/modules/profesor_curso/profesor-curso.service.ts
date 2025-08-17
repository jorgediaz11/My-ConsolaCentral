import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorCurso } from './profesor-curso.entity';
import { CreateProfesorCursoDto } from './dto/CreateProfesor-CursoDto';
import { UpdateProfesorCursoDto } from './dto/UpdateProfesor-CursoDto';

@Injectable()
export class ProfesorCursoService {
  constructor(
    @InjectRepository(ProfesorCurso)
    private profesorCursoRepository: Repository<ProfesorCurso>,
  ) {}

  findAll(): Promise<ProfesorCurso[]> {
    return this.profesorCursoRepository.find();
  }

  findOne(id: number): Promise<ProfesorCurso | null> {
    return this.profesorCursoRepository.findOneBy({ id_profesor_curso: id });
  }

  async create(dto: CreateProfesorCursoDto): Promise<ProfesorCurso> {
    const profesorCurso = this.profesorCursoRepository.create(dto);
    return await this.profesorCursoRepository.save(profesorCurso);
  }

  async update(
    id: number,
    dto: UpdateProfesorCursoDto,
  ): Promise<ProfesorCurso | null> {
    await this.profesorCursoRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.profesorCursoRepository.delete(id);
  }
}
