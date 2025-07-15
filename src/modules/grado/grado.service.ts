import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grado } from './grado.entity';
import { CreateGradoDto } from './dto/CreateGradoDto';
import { UpdateGradoDto } from './dto/UpdateGradoDto';

@Injectable()
export class GradoService {
  constructor(
    @InjectRepository(Grado)
    private gradoRepository: Repository<Grado>,
  ) {}

  findAll(): Promise<Grado[]> {
    return this.gradoRepository.find({ relations: ['nivel'] });
  }

  findOne(id: number): Promise<Grado | null> {
    return this.gradoRepository.findOne({
      where: { id_grado: id },
      relations: ['nivel'],
    });
  }

  async create(dto: CreateGradoDto): Promise<Grado> {
    const grado = this.gradoRepository.create(dto);
    return await this.gradoRepository.save(grado);
  }

  async update(id: number, dto: UpdateGradoDto): Promise<Grado | null> {
    await this.gradoRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.gradoRepository.delete(id);
  }
}
