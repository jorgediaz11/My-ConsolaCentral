import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Familia } from './familia.entity';
import { CreateFamiliaDto } from './dto/CreateFamiliaDto';
import { UpdateFamiliaDto } from './dto/UpdateFamiliaDto';

@Injectable()
export class FamiliaService {
  constructor(
    @InjectRepository(Familia)
    private familiaRepository: Repository<Familia>,
  ) {}

  findAll(): Promise<Familia[]> {
    return this.familiaRepository.find({ where: { id_perfil: 5 } });
  }

  findOne(id: number): Promise<Familia | null> {
    return this.familiaRepository.findOneBy({ id_familia: id });
  }

  async create(dto: CreateFamiliaDto): Promise<Familia> {
    const familia = this.familiaRepository.create(dto);
    return await this.familiaRepository.save(familia);
  }

  async update(id: number, dto: UpdateFamiliaDto): Promise<Familia | null> {
    await this.familiaRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.familiaRepository.delete(id);
  }

  // Filtrar por colegio
  async findByColegio(id_colegio: number): Promise<Familia[]> {
    return this.familiaRepository.find({ where: { id_colegio, id_perfil: 5 } });
  }
}
