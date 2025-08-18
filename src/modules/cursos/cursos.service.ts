import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cursos } from './cursos.entity';
import { CreateCursosDto } from './dto/CreateCursosDto';
import { UpdateCursosDto } from './dto/UpdateCursosDto';
import { CreateCursoCompletoDto } from './dto/CreateCursoCompletoDto';
import { UnidadService } from '../unidad/unidad.service';
import { LeccionService } from '../leccion/leccion.service';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Cursos)
    private cursosRepository: Repository<Cursos>,
    private readonly unidadService: UnidadService,
    private readonly leccionService: LeccionService,
  ) {}

  async crearCursoCompleto(dto: CreateCursoCompletoDto) {
    // 1. Crear el curso
    const cursoEntity = this.cursosRepository.create({
      nombre: dto.nombre_curso, // Cambia 'nombre_curso' por el nombre correcto según la entidad Cursos
      // agrega aquí otras propiedades requeridas por la entidad Cursos
    });
    const curso: Cursos = await this.cursosRepository.save(cursoEntity);

    // 2. Crear unidades y lecciones
    for (let i = 0; i < dto.cantidad_unidades; i++) {
      const unidad = await this.unidadService.create({
        id_curso: curso.id_curso,
        nombre: `Unidad ${i + 1}`,
        orden: i + 1,
        estado: true, // o false según la lógica de tu aplicación
      });

      for (let j = 0; j < dto.cantidad_lecciones_por_unidad; j++) {
        await this.leccionService.create({
          id_unidad: unidad.id_unidad,
          titulo: `Lección ${j + 1}`,
          contenido: '',
          estado: true, // o false según la lógica de tu aplicación
        });
      }
    }

    return curso;
  }

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
