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

  // Listar todos los Estudiantes
  findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find({ where: { id_perfil: 4 } });
  }

  // Obtener un estudiante por ID
  async findOne(id: number): Promise<Estudiante | null> {
    return this.estudiantesRepository.findOneBy({ id_estudiante: id });
  }

  async create(dto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = this.estudiantesRepository.create(dto);
    return await this.estudiantesRepository.save(estudiante);
  }

  // Actualizar un estudiante por ID
  async update(
    id_estudiante: number,
    dto: UpdateEstudianteDto,
  ): Promise<Estudiante | null> {
    await this.estudiantesRepository.update(id_estudiante, dto);
    return this.findOne(id_estudiante);
  }

  // Eliminar un estudiante por ID
  async remove(id: number): Promise<void> {
    await this.estudiantesRepository.delete(id);
  }

  // Listar estudiantes con perfil estudiante (id_perfil = 4)
  async findAllEstudiantes(): Promise<any[]> {
    return this.estudiantesRepository.find({
      where: { id_perfil: 4 },
      select: [
        'nombres',
        'apellido',
        'correo',
        'telefono',
        'direccion',
        'fecha_nacimiento',
        'estado',
        //'docente_titulo',
        'foto_perfil',
        'ultimo_acceso',
      ],
    });
  }

  // Listar estudiantes por colegio
  async findByColegio(id_colegio: number): Promise<Estudiante[]> {
    return this.estudiantesRepository.find({ where: { id_colegio } });
  }
}
