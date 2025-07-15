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
    private repo: Repository<Unidad>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  create(dto: CreateUnidadDto) {
    const obj = this.repo.create(dto);
    return this.repo.save(obj);
  }

  async update(id: number, dto: UpdateUnidadDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
