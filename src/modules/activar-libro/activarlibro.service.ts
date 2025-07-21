import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivarLibro } from './activarlibro.entity';
import { CreateActivarLibroDto } from './dto/CreateActivarLibroDto';
import { UpdateActivarLibroDto } from './dto/UpdateActivarLibroDto';

@Injectable()
export class ActivarLibroService {
  constructor(
    @InjectRepository(ActivarLibro)
    private activarLibroRepository: Repository<ActivarLibro>,
  ) {}

  findAll(): Promise<ActivarLibro[]> {
    return this.activarLibroRepository.find();
  }

  findOne(id: number): Promise<ActivarLibro | null> {
    return this.activarLibroRepository.findOneBy({ id_activacion: id });
  }

  async create(dto: CreateActivarLibroDto): Promise<ActivarLibro> {
    const activacion = this.activarLibroRepository.create(dto);
    return await this.activarLibroRepository.save(activacion);
  }

  async update(
    id: number,
    dto: UpdateActivarLibroDto,
  ): Promise<ActivarLibro | null> {
    await this.activarLibroRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.activarLibroRepository.delete(id);
  }

  // Filtrar por id_activacion
  async findByActivacion(id_activacion: number): Promise<ActivarLibro[]> {
    return this.activarLibroRepository.find({ where: { id_activacion } });
  }
}
