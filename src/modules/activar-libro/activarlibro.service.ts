import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivarLibro } from './activarlibro.entity';
import { Usuarios } from '../usuarios/usuarios.entity';
import { Libro } from '../libro/libros.entity'; // Asegúrate de que Libro es una clase de entidad exportada correctamente

@Injectable()
export class ActivarLibroService {
  constructor(
    @InjectRepository(ActivarLibro)
    private activarLibroRepository: Repository<ActivarLibro>,
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
    @InjectRepository(Libro)
    private librosRepository: Repository<Libro>,
  ) {}

  async getLibrosPendientes(
    id_estudiante: number,
    id_colegio: number,
    id_grado: number,
  ) {
    return this.activarLibroRepository.find({
      where: {
        id_estudiante,
        id_colegio,
        estado: false,
        id_grado,
      },
    });
  }

  async updateEstadoByParams(
    id_colegio: number,
    id_estudiante: number,
    id_curso: number,
    codigo_libro: string,
    estado: boolean,
  ): Promise<void> {
    await this.activarLibroRepository.update(
      { id_colegio, id_estudiante, id_curso, codigo_libro },
      { estado },
    );
  }
}
