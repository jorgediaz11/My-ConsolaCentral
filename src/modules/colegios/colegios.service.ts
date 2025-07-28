import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colegio } from './colegio.entity';
import { CreateColegioDto } from './dto/CreateColegioDto';
import { UpdateColegioDto } from './dto/UpdateColegioDto';

@Injectable()
export class ColegiosService {
  constructor(
    @InjectRepository(Colegio)
    private colegiosRepository: Repository<Colegio>, // Inyecta el repositorio de la entidad Colegio.
  ) {}

  // Obtener todos los colegios de la base de datos
  findAll(): Promise<Colegio[]> {
    return this.colegiosRepository.find();
  }

  // Crear un nuevo colegio en la base de datos
  async create(createColegioDto: CreateColegioDto): Promise<Colegio> {
    const colegio = this.colegiosRepository.create(createColegioDto);
    return await this.colegiosRepository.save(colegio);
  }

  // Obtener un colegio por ID
  async findOne(id: number): Promise<Colegio | null> {
    return this.colegiosRepository.findOneBy({ id_colegio: id });
  }

  // Actualizar un colegio por ID
  async update(
    id: number,
    updateColegioDto: UpdateColegioDto,
  ): Promise<Colegio | null> {
    await this.colegiosRepository.update(id, updateColegioDto);
    return this.findOne(id);
  }

  // Eliminar un colegio por ID
  async remove(id_ubigeo: number): Promise<void> {
    await this.colegiosRepository.delete(id_ubigeo);
  }

  // Nuevo método para filtrar por ubigeo
  async findByUbigeo(id_ubigeo: string): Promise<Colegio[]> {
    return this.colegiosRepository.find({ where: { id_ubigeo } });
  }

  async findByUbigeoDistrito(id_ubigeo: string): Promise<Colegio[]> {
    return this.colegiosRepository.find({
      where: { id_ubigeo: id_ubigeo }, // El campo debe coincidir exactamente
    });
  }
  async findByAdminPerfil(
    id_perfil: number,
    id_colegio: number,
  ): Promise<Colegio[]> {
    return this.colegiosRepository.find({
      where: {
        id_colegio,
        // id_perfil, // Asegúrate que este campo exista en la entidad y tabla
      },
    });
  }

  async findClientes(): Promise<Colegio[]> {
    return this.colegiosRepository.find({
      where: {
        colegio_cliente: true,
        estado: true,
      },
    });
  }
  catch(error) {
    console.error('Error en findClientes:', error);
    throw error;
  }
}
