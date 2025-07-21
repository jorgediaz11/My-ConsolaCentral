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

  findAll(): Promise<AdminSec[]> {
    return this.adminSecRepository.find({ where: { id_perfil: 2 } });
  }

  findOne(id: number): Promise<AdminSec | null> {
    return this.adminSecRepository.findOneBy({ id_adminsec: id });
  }

  async create(dto: CreateAdminSecDto): Promise<AdminSec> {
    const adminsec = this.adminSecRepository.create(dto);
    return await this.adminSecRepository.save(adminsec);
  }

  async update(id: number, dto: UpdateAdminSecDto): Promise<AdminSec | null> {
    await this.adminSecRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.adminSecRepository.delete(id);
  }

  // Filtrar por colegio
  async findByColegio(id_colegio: number): Promise<AdminSec[]> {
    return this.adminSecRepository.find({
      where: { id_colegio, id_perfil: 2 },
    });
  }
}
