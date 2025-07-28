import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidad } from './unidad.entity';
import { CreateUnidadDto } from './dto/CreateUnidadDto';
import { UpdateUnidadDto } from './dto/UpdateUnidadDto';

@Injectable()
export class UnidadService {
  constructor(
    @InjectRepository(Unidad)
    private unidadRepository: Repository<Unidad>,
  ) {}

  findAll() {
    return this.unidadRepository.find();
  }

  findOne(id: number) {
    return this.unidadRepository.findOneBy({ id_unidad: id });
  }

  create(dto: CreateUnidadDto) {
    const unidad = this.unidadRepository.create(dto);
    return this.unidadRepository.save(unidad);
  }

  async update(id: number, dto: UpdateUnidadDto) {
    await this.unidadRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.unidadRepository.delete(id);
  }
}
