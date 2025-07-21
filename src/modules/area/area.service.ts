import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './area.entity';
import { CreateAreaDto } from './dto/CreateAreaDto';
import { UpdateAreaDto } from './dto/UpdateAreaDto';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private areaRepository: Repository<Area>,
  ) {}

  findAll(): Promise<Area[]> {
    return this.areaRepository.find();
  }

  findOne(id: number): Promise<Area | null> {
    return this.areaRepository.findOneBy({ id_area: id });
  }

  async create(dto: CreateAreaDto): Promise<Area> {
    const area = this.areaRepository.create(dto);
    return await this.areaRepository.save(area);
  }

  async update(id: number, dto: UpdateAreaDto): Promise<Area | null> {
    await this.areaRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.areaRepository.delete(id);
  }

  // Ejemplo: filtrar por tipo_curso
  async findByTipo(tipo_curso: string): Promise<Area[]> {
    return this.areaRepository.find({ where: { tipo_curso } });
  }
}
