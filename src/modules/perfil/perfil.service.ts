import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perfil } from './perfil.entity';
import { CreatePerfilDto } from './dto/CreatePerfilDto';
import { UpdatePerfilDto } from './dto/UpdatePerfilDto';

@Injectable()
export class PerfilService {
  constructor(
    @InjectRepository(Perfil)
    private repo: Repository<Perfil>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  create(dto: CreatePerfilDto) {
    const obj = this.repo.create(dto);
    return this.repo.save(obj);
  }

  async update(id: number, dto: UpdatePerfilDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
