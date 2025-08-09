import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActividadEducativa } from './actividades.entity';
import { CreateActividadDto } from './dto/CreateActividadDto';
import { UpdateActividadDto } from './dto/UpdateActividadDto';

@Injectable()
export class ActividadesService {
  constructor(
    @InjectRepository(ActividadEducativa)
    private actividadRepository: Repository<ActividadEducativa>,
  ) {}

  findAll(): Promise<ActividadEducativa[]> {
    return this.actividadRepository.find();
  }

  findOne(id: number): Promise<ActividadEducativa | null> {
    return this.actividadRepository.findOneBy({ id_actividad: id });
  }

  async create(dto: CreateActividadDto): Promise<ActividadEducativa> {
    const actividad = this.actividadRepository.create(dto);
    return await this.actividadRepository.save(actividad);
  }

  async update(
    id: number,
    dto: UpdateActividadDto,
  ): Promise<ActividadEducativa | null> {
    await this.actividadRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.actividadRepository.delete(id);
  }
}
