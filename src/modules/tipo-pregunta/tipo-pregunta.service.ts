import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoPregunta } from './tipo-pregunta.entity';
import { CreateTipoPreguntaDto } from './dto/CreateTipo-PreguntaDto';
import { UpdateTipoPreguntaDto } from './dto/UpdateTipo-PreguntaDto';

@Injectable()
export class TipoPreguntaService {
  constructor(
    @InjectRepository(TipoPregunta)
    private tipoPreguntaRepository: Repository<TipoPregunta>,
  ) {}

  findAll() {
    return this.tipoPreguntaRepository.find();
  }

  findOne(id: number) {
    return this.tipoPreguntaRepository.findOneBy({ id_tipo_pregunta: id });
  }

  create(dto: CreateTipoPreguntaDto) {
    const tipoPregunta = this.tipoPreguntaRepository.create(dto);
    return this.tipoPreguntaRepository.save(tipoPregunta);
  }

  async update(id: number, dto: UpdateTipoPreguntaDto) {
    await this.tipoPreguntaRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.tipoPreguntaRepository.delete(id);
  }
}
