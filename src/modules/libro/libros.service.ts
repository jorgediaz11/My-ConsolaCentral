import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libros.entity';
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

  findOne(id_libro: number): Promise<Libro | null> {
    return this.librosRepository.findOneBy({ id_libro: id_libro });
  }

  create(dto: CreateLibrosDto): Promise<Libro> {
    const libro = this.librosRepository.create(dto);
    return this.librosRepository.save(libro);
  }

  async update(id_libro: number, dto: UpdateLibrosDto): Promise<Libro | null> {
    await this.librosRepository.update(id_libro, dto);
    return this.findOne(id_libro);
  }

  async remove(id_libro: number): Promise<void> {
    await this.librosRepository.delete(id_libro);
  }
}
