import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Familia } from './familia.entity';
import { CreateFamiliaDto } from './dto/CreateFamiliaDto';
import { UpdateFamiliaDto } from './dto/UpdateFamiliaDto';

@Injectable()
export class FamiliaService {
  constructor(
    @InjectRepository(Familia)
    private familiaRepository: Repository<Familia>,
  ) {}

  // Listar todos los familiares
  findAll(): Promise<Familia[]> {
    return this.familiaRepository.find({ where: { id_perfil: 5 } });
  }

  // Obtener un familiar por ID
  async findOne(id: number): Promise<Familia | null> {
    return this.familiaRepository.findOneBy({ id_familia: id });
  }

  // Crear un familiar
  async create(dto: CreateFamiliaDto): Promise<Familia> {
    const familia = this.familiaRepository.create(dto);
    return await this.familiaRepository.save(familia);
  }

  // Actualizar un familiar por ID
  async update(
    id_familiar: number,
    dto: UpdateFamiliaDto,
  ): Promise<Familia | null> {
    await this.familiaRepository.update(id_familiar, dto);
    return this.findOne(id_familiar);
  }

  // Eliminar un familiar por ID
  async remove(id_familiar: number): Promise<void> {
    await this.familiaRepository.delete(id_familiar);
  }

  // Listar familiares con perfil docente (id_perfil = 5)
  async findAllFamiliares(): Promise<any[]> {
    return this.familiaRepository.find({
      where: { id_perfil: 5 },
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

  // Filtrar por colegio
  async findByColegio(id_colegio: number): Promise<Familia[]> {
    return this.familiaRepository.find({ where: { id_colegio, id_perfil: 5 } });
  }
}
