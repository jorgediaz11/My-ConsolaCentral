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
    private repo: Repository<TipoMaterial>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  create(dto: TipoMaterialCreateDto) {
    const obj = this.repo.create(dto);
    return this.repo.save(obj);
  }

  async update(id: number, dto: TipoMaterialUpdateDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
