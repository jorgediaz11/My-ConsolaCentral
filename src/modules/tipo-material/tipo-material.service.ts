import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoMaterial } from './tipo-material.entity';
import { CreateTipoMaterialDto } from './dto/CreateTipo-materialDto';
import { UpdateTipoMaterialDto } from './dto/UpdateTipo-materialDto';

@Injectable()
export class TipoMaterialService {
  constructor(
    @InjectRepository(TipoMaterial)
    private tipomaterialRepository: Repository<TipoMaterial>,
  ) {}

  findAll() {
    return this.tipomaterialRepository.find();
  }

  findOne(id: number) {
    return this.tipomaterialRepository.findOneBy({ id_tipo_material: id });
  }

  create(dto: CreateTipoMaterialDto) {
    const tipo_material = this.tipomaterialRepository.create(dto);
    return this.tipomaterialRepository.save(tipo_material);
  }

  async update(id: number, dto: UpdateTipoMaterialDto) {
    await this.tipomaterialRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.tipomaterialRepository.delete(id);
  }
}
