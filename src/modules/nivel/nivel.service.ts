import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nivel } from './nivel.entity';
import { CreateNivelDto } from './dto/CreateNivelDto';
import { UpdateNivelDto } from './dto/UpdateNivelDto';

@Injectable()
export class NivelService {
  constructor(
    @InjectRepository(Nivel)
    private nivelRepository: Repository<Nivel>,
  ) {}

  findAll(): Promise<Nivel[]> {
    return this.nivelRepository.find();
  }

  findOne(id: number): Promise<Nivel | null> {
    return this.nivelRepository.findOneBy({ id_nivel: id });
  }

  async create(dto: CreateNivelDto): Promise<Nivel> {
    const nivel = this.nivelRepository.create(dto);
    return await this.nivelRepository.save(nivel);
  }

  async update(id: number, dto: UpdateNivelDto): Promise<Nivel | null> {
    await this.nivelRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.nivelRepository.delete(id);
  }
}
