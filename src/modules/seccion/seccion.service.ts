import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seccion } from './seccion.entity';
import { CreateSeccionDto } from './dto/CreateSeccionDto';
import { UpdateSeccionDto } from './dto/UpdateSeccionDto';

@Injectable()
export class SeccionService {
  constructor(
    @InjectRepository(Seccion)
    private seccionRepository: Repository<Seccion>,
  ) {}

  findAll(): Promise<Seccion[]> {
    return this.seccionRepository.find();
  }

  findOne(id: number): Promise<Seccion | null> {
    return this.seccionRepository.findOneBy({ id_seccion: id });
  }

  async create(dto: CreateSeccionDto): Promise<Seccion> {
    const seccion = this.seccionRepository.create(dto);
    return await this.seccionRepository.save(seccion);
  }

  async update(id: number, dto: UpdateSeccionDto): Promise<Seccion | null> {
    await this.seccionRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.seccionRepository.delete(id);
  }
}
