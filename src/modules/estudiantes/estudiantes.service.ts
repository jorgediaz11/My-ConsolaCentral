import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { CreateEstudianteDto } from './dto/CreateEstudianteDto';
import { UpdateEstudianteDto } from './dto/UpdateEstudianteDto';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ) {}

  findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = this.estudiantesRepository.create(createEstudianteDto);
    return await this.estudiantesRepository.save(estudiante);
  }

  // Obtener un estudiante por ID
  async findOne(id: number): Promise<Estudiante | null> {
    return this.estudiantesRepository.findOneBy({ id_estudiante: id });
  }

  // Actualizar un estudiante por ID
  async update(
    id: number,
    updateEstudianteDto: UpdateEstudianteDto,
  ): Promise<Estudiante | null> {
    await this.estudiantesRepository.update(id, updateEstudianteDto);
    return this.findOne(id);
  }

  // Eliminar un estudiante por ID
  async remove(id: number): Promise<void> {
    await this.estudiantesRepository.delete(id);
  }

  // Buscar estudiantes por colegio
  async findByColegio(id_colegio: number): Promise<Estudiante[]> {
    return this.estudiantesRepository.find({
      where: { id_colegio },
      relations: ['nivel', 'grado', 'seccion'], // Ajusta según tus relaciones
    });
  }

  // filepath: [estudiantes.service.ts](http://_vscodecontentref_/0)
  // async findByColegioProfesor(
  //   id_colegio: number,
  //   id_profesor: number,
  //   id_nivel: number,
  //   id_grado: number,
  //   id_seccion: number,
  // ): Promise<Estudiante[]> {
  //   return this.estudiantesRepository.find({
  //     where: {
  //       id_colegio,
  //       id_profesor,
  //       id_nivel,
  //       id_grado,
  //       id_seccion,
  //     },
  //     relations: ['nivel', 'grado', 'seccion'], // Ajusta según tus relaciones
  //   });
  // }
}
