import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './Libros.entity';
import { CreateLibrosDto } from './dto/CreateLibrosDto';
import { UpdateLibrosDto } from './dto/UpdateLibrosDto';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private librosRepository: Repository<Libro>,
  ) {}

  findAll(): Promise<Libro[]> {
    return this.librosRepository.find();
  }

  findOne(id: number): Promise<Libro | null> {
    return this.librosRepository.findOneBy({ id_libro: id });
  }

  create(dto: CreateLibrosDto): Promise<Libro> {
    const libro = this.librosRepository.create(dto);
    return this.librosRepository.save(libro);
  }

  async update(id: number, dto: UpdateLibrosDto): Promise<Libro | null> {
    await this.librosRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.librosRepository.delete(id);
  }
}
