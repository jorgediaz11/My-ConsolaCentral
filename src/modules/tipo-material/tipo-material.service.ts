import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoMaterial } from './tipo-material.entity';
import { TipoMaterialCreateDto } from './dto/CreateTipo-materialDto';
import { TipoMaterialUpdateDto } from './dto/UpdateTipo-materialDto';

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

  create(dto: TipoMaterialCreateDto) {
    const tipo_material = this.tipomaterialRepository.create(dto);
    return this.tipomaterialRepository.save(tipo_material);
  }

  async update(id: number, dto: TipoMaterialUpdateDto) {
    await this.tipomaterialRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.tipomaterialRepository.delete(id);
  }
}
