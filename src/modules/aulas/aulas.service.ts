import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aula } from './aulas.entity';
import { CreateAulaDto } from './dto/CreateAulaDto';
import { UpdateAulaDto } from './dto/UpdateAulaDto';

@Injectable()
export class AulasService {
  constructor(
    @InjectRepository(Aula)
    private aulasRepository: Repository<Aula>,
  ) {}

  findAll(): Promise<Aula[]> {
    return this.aulasRepository.find();
  }

  findOne(id: number): Promise<Aula | null> {
    return this.aulasRepository.findOneBy({ id_aula: id });
  }

  async create(dto: CreateAulaDto): Promise<Aula> {
    const aula: Aula = this.aulasRepository.create(dto);
    return await this.aulasRepository.save(aula);
  }

  async update(id: number, dto: UpdateAulaDto): Promise<Aula | null> {
    await this.aulasRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.aulasRepository.delete(id);
  }
}
