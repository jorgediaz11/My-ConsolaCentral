import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RespuestaEstudiante } from './respuestas.entity';
import { CreateRespuestaDto } from './dto/CreateRespuestaDto';
import { UpdateRespuestaDto } from './dto/UpdateRespuestaDto';

@Injectable()
export class RespuestaEstudianteService {
  constructor(
    @InjectRepository(RespuestaEstudiante)
    private respuestaRepository: Repository<RespuestaEstudiante>,
  ) {}

  findAll(): Promise<RespuestaEstudiante[]> {
    return this.respuestaRepository.find();
  }

  findOne(id: number): Promise<RespuestaEstudiante | null> {
    return this.respuestaRepository.findOneBy({ id_respuesta: id });
  }

  async create(dto: CreateRespuestaDto): Promise<RespuestaEstudiante> {
    const respuesta = this.respuestaRepository.create(dto);
    return await this.respuestaRepository.save(respuesta);
  }

  async update(
    id: number,
    dto: UpdateRespuestaDto,
  ): Promise<RespuestaEstudiante | null> {
    await this.respuestaRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.respuestaRepository.delete(id);
  }
}
