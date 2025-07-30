import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoGrado } from './alumnogrado.entity';

@Injectable()
export class AlumnoGradoService {
  constructor(
    @InjectRepository(AlumnoGrado)
    private alumnoGradoRepository: Repository<AlumnoGrado>,
  ) {}

  async findAll(): Promise<AlumnoGrado[]> {
    return this.alumnoGradoRepository.find();
  }

  async findOne(id: number): Promise<AlumnoGrado | null> {
    return this.alumnoGradoRepository.findOne({
      where: { id_alumno_grado: id },
    });
  }

  async findByUsuarioAndAnio(
    id_usuario: number,
    anio_escolar: number,
  ): Promise<AlumnoGrado | null> {
    return this.alumnoGradoRepository.findOne({
      where: { id_usuario, anio_escolar, estado: true },
    });
  }
}
