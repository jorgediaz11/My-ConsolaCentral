import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leccion } from './leccion.entity';
import { CreateLeccionDto } from './dto/CreateLeccionDto';
import { UpdateLeccionDto } from './dto/UpdateLeccionDto';

@Injectable()
export class LeccionService {
  constructor(
    @InjectRepository(Leccion)
    private repo: Repository<Leccion>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  create(dto: CreateLeccionDto) {
    const obj = this.repo.create(dto);
    return this.repo.save(obj);
  }

  async update(id: number, dto: UpdateLeccionDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
