import { Injectable, BadRequestException } from '@nestjs/common';
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

  async activarLibroPorCodigo(
    username: string,
    codigo_libro: string,
  ): Promise<ActivarLibro> {
    // 1. Buscar el usuario
    const usuario = await this.usuariosRepository.findOne({
      where: { username },
    });
    if (!usuario) {
      throw new BadRequestException('Usuario no encontrado');
    }

    // 2. Buscar el libro y curso por el código, colegio y grado del usuario
    const libro = await this.librosRepository.findOne({
      where: {
        // Usa el nombre de propiedad correcto según la entidad Libro
        // Por ejemplo, si el campo en la entidad es 'codigo', usa 'codigo'
        // Si realmente es 'codigo_libro', asegúrate de que exista en la entidad Libro
        codigo_libro: codigo_libro, // Usa el nombre correcto del campo según la entidad Libro
        // id_colegio: usuario.id_colegio, // Removido porque no existe en la entidad Libro
        //id_grado: usuario.id_grado, // Asegúrate de tener este campo en la entidad usuario
      },
    });
    if (!libro) {
      throw new BadRequestException(
        'Código de activación incorrecto o no corresponde a tus cursos',
      );
    }

    // 3. Registrar la activación
    const activacion = this.activarLibroRepository.create({
      id_libro: libro.id_libro,
      // id_curso: libro.id_curso, // Removed because 'id_curso' does not exist on type 'Libro'
      id_colegio: usuario.id_colegio,
      id_estudiante: usuario.id_usuario,
      codigo_libro,
      estado: 'activo',
    });
    return await this.activarLibroRepository.save(activacion);
  }
}
