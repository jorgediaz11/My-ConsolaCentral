import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluacionCuestionario } from './evaluacionescuestionario.entity';
import { CreateEvaluacionDto } from './dto/CreateEvaluacionCuestionarioDto';
import { UpdateEvaluacionDto } from './dto/UpdateEvaluacionCuestionarioDto';

@Injectable()
export class EvaluacionCuestionarioService {
  constructor(
    @InjectRepository(EvaluacionCuestionario)
    private evaluacionRepository: Repository<EvaluacionCuestionario>,
  ) {}

  findAll(): Promise<EvaluacionCuestionario[]> {
    return this.evaluacionRepository.find();
  }

  findOne(id: number): Promise<EvaluacionCuestionario | null> {
    return this.evaluacionRepository.findOneBy({ id_evaluacion: id });
  }

  async create(dto: CreateEvaluacionDto): Promise<EvaluacionCuestionario> {
    const evaluacion = this.evaluacionRepository.create(dto);
    return await this.evaluacionRepository.save(evaluacion);
  }

  async update(
    id: number,
    dto: UpdateEvaluacionDto,
  ): Promise<EvaluacionCuestionario | null> {
    await this.evaluacionRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.evaluacionRepository.delete(id);
  }
}
