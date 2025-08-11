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
    private unidadRepository: Repository<Unidad>,
  ) {}

  findAll(): Promise<Unidad[]> {
    return this.unidadRepository.find();
  }

  findOne(id: number): Promise<Unidad | null> {
    return this.unidadRepository.findOneBy({ id_unidad: id });
  }

  async findByCurso(id_curso: number): Promise<Unidad[]> {
    return this.unidadRepository.find({
      where: { curso: { id_curso } },
      relations: ['curso'],
    });
  }

  create(dto: CreateUnidadDto): Promise<Unidad> {
    const unidad = this.unidadRepository.create(dto);
    return this.unidadRepository.save(unidad);
  }

  async update(id: number, dto: UpdateUnidadDto): Promise<Unidad | null> {
    await this.unidadRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number): Promise<any> {
    return this.unidadRepository.delete(id);
  }
}
