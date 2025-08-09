import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pregunta } from './preguntas.entity';
import { CreatePreguntaDto } from './dto/CreatePreguntaDto';
import { UpdatePreguntaDto } from './dto/UpdatePreguntaDto';

@Injectable()
export class PreguntasService {
  constructor(
    @InjectRepository(Pregunta)
    private preguntaRepository: Repository<Pregunta>,
  ) {}

  findAll(): Promise<Pregunta[]> {
    return this.preguntaRepository.find();
  }

  findOne(id: number): Promise<Pregunta | null> {
    return this.preguntaRepository.findOneBy({ id_pregunta: id });
  }

  async create(createPreguntaDto: CreatePreguntaDto): Promise<Pregunta> {
    const pregunta = this.preguntaRepository.create(createPreguntaDto);
    return await this.preguntaRepository.save(pregunta);
  }

  async update(
    id: number,
    updatePreguntaDto: UpdatePreguntaDto,
  ): Promise<Pregunta | null> {
    await this.preguntaRepository.update(id, updatePreguntaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.preguntaRepository.delete(id);
  }
}
