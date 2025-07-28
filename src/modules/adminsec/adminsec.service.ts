import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminSec } from './adminsec.entity';
import { CreateAdminSecDto } from './dto/CreateAdminSecDto';
import { UpdateAdminSecDto } from './dto/UpdateAdminSecDto';

@Injectable()
export class AdminSecService {
  constructor(
    @InjectRepository(AdminSec)
    private adminSecRepository: Repository<AdminSec>,
  ) {}

  // Listar todos los administradores de seguridad
  findAll(): Promise<AdminSec[]> {
    return this.adminSecRepository.find({ where: { id_perfil: 2 } });
  }

  // Obtener un administrador de seguridad por ID
  findOne(id: number): Promise<AdminSec | null> {
    return this.adminSecRepository.findOneBy({ id_adminsec: id });
  }

  // Crear un administrador de seguridad
  async create(dto: CreateAdminSecDto): Promise<AdminSec> {
    const adminsec = this.adminSecRepository.create(dto);
    return await this.adminSecRepository.save(adminsec);
  }

  // Actualizar un administrador de seguridad por ID
  async update(
    id_adminsec: number,
    dto: UpdateAdminSecDto,
  ): Promise<AdminSec | null> {
    await this.adminSecRepository.update(id_adminsec, dto);
    return this.findOne(id_adminsec);
  }

  // Eliminar un administrador de seguridad por ID
  async remove(id_adminsec: number): Promise<void> {
    await this.adminSecRepository.delete(id_adminsec);
  }

  // Listar administradores de seguridad con perfil de administrador (id_perfil = 2)
  async findAllAdminSec(): Promise<any[]> {
    return this.adminSecRepository.find({
      where: { id_perfil: 2 },
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
  async findByColegio(id_colegio: number): Promise<AdminSec[]> {
    return this.adminSecRepository.find({
      where: { id_colegio, id_perfil: 2 },
    });
  }
}
