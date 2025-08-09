import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluacionActividad } from './evaluacionesactividad.entity';
import { CreateEvaluacionActividadDto } from './dto/CreateEvaluacionActividadDto';
import { UpdateEvaluacionActividadDto } from './dto/UpdateEvaluacionActividadDto';

@Injectable()
export class EvaluacionActividadService {
  constructor(
    @InjectRepository(EvaluacionActividad)
    private evaluacionRepository: Repository<EvaluacionActividad>,
  ) {}

  findAll(): Promise<EvaluacionActividad[]> {
    return this.evaluacionRepository.find();
  }

  findOne(id: number): Promise<EvaluacionActividad | null> {
    return this.evaluacionRepository.findOneBy({ id_evaluacion: id });
  }

  async create(
    dto: CreateEvaluacionActividadDto,
  ): Promise<EvaluacionActividad> {
    const evaluacion = this.evaluacionRepository.create(dto);
    return await this.evaluacionRepository.save(evaluacion);
  }

  async update(
    id: number,
    dto: UpdateEvaluacionActividadDto,
  ): Promise<EvaluacionActividad | null> {
    await this.evaluacionRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.evaluacionRepository.delete(id);
  }
}
