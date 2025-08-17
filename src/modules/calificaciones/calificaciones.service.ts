import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calificacion } from './calificaciones.entity';
import { CreateCalificacionDto } from './dto/CreateCalificacionDto';
import { UpdateCalificacionDto } from './dto/UpdateCalificacionDto';

@Injectable()
export class CalificacionService {
  constructor(
    @InjectRepository(Calificacion)
    private calificacionRepository: Repository<Calificacion>,
  ) {}

  findAll(): Promise<Calificacion[]> {
    return this.calificacionRepository.find();
  }

  findOne(id: number): Promise<Calificacion | null> {
    return this.calificacionRepository.findOneBy({ id_calificacion: id });
  }

  async create(dto: CreateCalificacionDto): Promise<Calificacion> {
    const calificacion = this.calificacionRepository.create(dto);
    return await this.calificacionRepository.save(calificacion);
  }

  async update(
    id: number,
    dto: UpdateCalificacionDto,
  ): Promise<Calificacion | null> {
    await this.calificacionRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.calificacionRepository.delete(id);
  }
}
