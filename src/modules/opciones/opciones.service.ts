import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Opcion } from './opciones.entity';
import { CreateOpcionDto } from './dto/CreateOpcionDto';
import { UpdateOpcionDto } from './dto/UpdateOpcionDto';

@Injectable()
export class OpcionesService {
  constructor(
    @InjectRepository(Opcion)
    private opcionRepository: Repository<Opcion>,
  ) {}

  findAll(): Promise<Opcion[]> {
    return this.opcionRepository.find();
  }

  findOne(id: number): Promise<Opcion | null> {
    return this.opcionRepository.findOneBy({ id_opcion: id });
  }

  async create(dto: CreateOpcionDto): Promise<Opcion> {
    const opcion = this.opcionRepository.create(dto);
    return await this.opcionRepository.save(opcion);
  }

  async update(id: number, dto: UpdateOpcionDto): Promise<Opcion | null> {
    await this.opcionRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.opcionRepository.delete(id);
  }
}
