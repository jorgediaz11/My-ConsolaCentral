import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoActividad } from './tipo-actividad.entity';
import { CreateTipoActividadDto } from './dto/CreateTipo-ActividadDto';
import { UpdateTipoActividadDto } from './dto/UpdateTipo-ActividadDto';

@Injectable()
export class TipoActividadService {
  constructor(
    @InjectRepository(TipoActividad)
    private tipoactividadRepository: Repository<TipoActividad>,
  ) {}

  findAll() {
    return this.tipoactividadRepository.find();
  }

  findOne(id: number) {
    return this.tipoactividadRepository.findOneBy({ id_tipo_actividad: id });
  }

  create(dto: CreateTipoActividadDto) {
    const tipo_actividad = this.tipoactividadRepository.create(dto);
    return this.tipoactividadRepository.save(tipo_actividad);
  }

  async update(id: number, dto: UpdateTipoActividadDto) {
    await this.tipoactividadRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.tipoactividadRepository.delete(id);
  }
}
