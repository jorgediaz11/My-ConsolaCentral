import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cursos } from './cursos.entity';
import { CreateCursosDto } from './dto/CreateCursosDto';
import { UpdateCursosDto } from './dto/UpdateCursosDto';
import { CreateCursoCompletoDto } from './dto/CreateCursoCompletoDto';
import { UnidadService } from '../unidad/unidad.service';
import { LeccionService } from '../leccion/leccion.service';
import { Leccion } from '../leccion/leccion.entity';
import { Unidad } from '../unidad/unidad.entity';
import { BadRequestException } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Cursos)
    private cursosRepository: Repository<Cursos>,
    private readonly unidadService: UnidadService,
    private readonly leccionService: LeccionService,
  ) {}

  async findDetalleById(id: number): Promise<Cursos | null> {
    return this.cursosRepository.findOne({
      where: { id_curso: id },
      relations: ['area', 'grado', 'unidades', 'unidades.lecciones'],
    });
  }

  findAll(): Promise<Cursos[]> {
    return this.cursosRepository.find({ relations: ['area', 'grado'] });
  }

  findOne(id: number): Promise<Cursos | null> {
    return this.cursosRepository.findOne({
      where: { id_curso: id },
      relations: ['area', 'grado'],
    });
  }

  async create(dto: CreateCursosDto): Promise<Cursos> {
    const curso = this.cursosRepository.create(dto);
    return await this.cursosRepository.save(curso);
  }

  async crearCursoCompleto(dto: CreateCursoCompletoDto) {
    console.log('Inicia Creación de Curso Completo');
    console.log('DTO recibido:', JSON.stringify(dto, null, 2));
    // Validación básica
    if (
      !dto.nombre ||
      !dto.id_area ||
      !dto.id_grado ||
      !dto.estado ||
      !dto.tipo_curso ||
      !dto.id_colegio ||
      !dto.id_nivel ||
      !dto.cantidad_unidades ||
      !dto.cantidad_lecciones_por_unidad ||
      dto.cantidad_unidades < 1 ||
      dto.cantidad_lecciones_por_unidad < 1
    ) {
      throw new BadRequestException(
        'Datos insuficientes o inválidos para crear el curso completo.',
      );
    }

    // Transacción para asegurar integridad
    return await this.cursosRepository.manager.transaction(
      async (manager: EntityManager) => {
        // 1. Crear el curso dentro de la transacción
        const cursoEntity = manager.create(Cursos, {
          nombre: dto.nombre,
          id_area: dto.id_area,
          id_grado: dto.id_grado,
          estado: dto.estado,
          tipo_curso: dto.tipo_curso,
          id_colegio: dto.id_colegio,
          id_nivel: dto.id_nivel,
          codigo_libro: dto.codigo_libro,
          descripcion: dto.descripcion,
          // otros campos requeridos
        });
        const curso: Cursos = await manager.save(Cursos, cursoEntity);
        console.log('Curso creado con ID:', curso.id_curso);

        // 2. Crear unidades y lecciones
        const unidades: Array<Unidad & { lecciones: Leccion[] }> = [];
        for (let i = 0; i < dto.cantidad_unidades; i++) {
          console.log('Unidades creada con ID Curso:', curso.id_curso);
          const unidad = await this.unidadService.createWithManager(manager, {
            id_curso: curso.id_curso,
            nombre: `Unidad ${i + 1}`,
            orden: i + 1,
            estado: true,
          });
          const lecciones: Leccion[] = [];
          for (let j = 0; j < dto.cantidad_lecciones_por_unidad; j++) {
            const leccion = await this.leccionService.createWithManager(
              manager,
              {
                id_unidad: unidad.id_unidad,
                titulo: `Lección ${j + 1}`,
                contenido: '',
                estado: true,
              },
            );
            lecciones.push(leccion);
          }
          unidades.push({ ...unidad, lecciones });
        }

        // Respuesta enriquecida
        return {
          curso,
          unidades,
        };
      },
    );
  }

  async update(id: number, dto: UpdateCursosDto): Promise<Cursos | null> {
    await this.cursosRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cursosRepository.delete(id);
  }

  // Ejemplo: filtrar por tipo_curso e id_colegio
  async findByTipoYColegio(
    tipo_curso: string, // 'Interno' o 'Externo'
    id_colegio: number,
  ): Promise<Cursos[]> {
    return this.cursosRepository.find({ where: { tipo_curso, id_colegio } });
  }
}
