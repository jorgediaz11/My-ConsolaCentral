import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntregaActividad } from './entregas.entity';
import { CreateEntregaDto } from './dto/CreateEntregaDto';
import { UpdateEntregaDto } from './dto/UpdateEntregaDto';

@Injectable()
export class EntregasService {
  constructor(
    @InjectRepository(EntregaActividad)
    private entregaRepository: Repository<EntregaActividad>,
  ) {}

  findAll(): Promise<EntregaActividad[]> {
    return this.entregaRepository.find();
  }

  findOne(id: number): Promise<EntregaActividad | null> {
    return this.entregaRepository.findOneBy({ id_entrega: id });
  }

  async create(dto: CreateEntregaDto): Promise<EntregaActividad> {
    const entrega = this.entregaRepository.create(dto);
    return await this.entregaRepository.save(entrega);
  }

  async update(
    id: number,
    dto: UpdateEntregaDto,
  ): Promise<EntregaActividad | null> {
    await this.entregaRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.entregaRepository.delete(id);
  }
}
