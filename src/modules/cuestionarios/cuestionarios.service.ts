import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCuestionarioDto } from './dto/CreateCuestionarioDto';
import { UpdateCuestionarioDto } from './dto/UpdateCuestionarioDto';
import { Cuestionario } from './cuestionarios.entity';

@Injectable()
export class CuestionariosService {
  constructor(
    @InjectRepository(Cuestionario)
    private cuestionarioRepository: Repository<Cuestionario>,
  ) {}

  // Obtener todos los cuestionarios
  findAll(): Promise<Cuestionario[]> {
    return this.cuestionarioRepository.find();
  }

  // Obtener un cuestionario por ID
  findOne(id: number): Promise<Cuestionario | null> {
    return this.cuestionarioRepository.findOneBy({ id_cuestionario: id });
  }

  // Crear un nuevo cuestionario
  async create(
    createCuestionarioDto: CreateCuestionarioDto,
  ): Promise<Cuestionario> {
    const cuestionario = this.cuestionarioRepository.create(
      createCuestionarioDto,
    );
    return await this.cuestionarioRepository.save(cuestionario);
  }

  async update(
    id: number,
    updateCuestionarioDto: UpdateCuestionarioDto,
  ): Promise<Cuestionario | null> {
    await this.cuestionarioRepository.update(id, updateCuestionarioDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cuestionarioRepository.delete(id);
  }
}
