import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoAcceso } from './tipo-acceso.entity';
import { CreateTipoAccesoDto } from './dto/CreateTipo-AccesoDto';
import { UpdateTipoAccesoDto } from './dto/UpdateTipo-AccesoDto';

@Injectable()
export class TipoAccesoService {
  constructor(
    @InjectRepository(TipoAcceso)
    private tipoAccesoRepository: Repository<TipoAcceso>,
  ) {}

  findAll(): Promise<TipoAcceso[]> {
    return this.tipoAccesoRepository.find();
  }

  findOne(id: number): Promise<TipoAcceso | null> {
    return this.tipoAccesoRepository.findOneBy({ id_tipo_acceso: id });
  }

  async create(dto: CreateTipoAccesoDto): Promise<TipoAcceso> {
    const tipoAcceso = this.tipoAccesoRepository.create(dto);
    return await this.tipoAccesoRepository.save(tipoAcceso);
  }

  async update(
    id: number,
    dto: UpdateTipoAccesoDto,
  ): Promise<TipoAcceso | null> {
    await this.tipoAccesoRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tipoAccesoRepository.delete(id);
  }
}
