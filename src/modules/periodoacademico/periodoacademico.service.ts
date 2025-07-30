import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeriodoAcademico } from './periodoacademico.entity';
import { CreatePeriodoAcademicoDto } from './dto/CreatePeriodoAcademicoDto';
import { UpdatePeriodoAcademicoDto } from './dto/UpdatePeriodoAcademicoDto';

@Injectable()
export class PeriodoAcademicoService {
  constructor(
    @InjectRepository(PeriodoAcademico)
    private readonly repo: Repository<PeriodoAcademico>,
  ) {}

  async findAll(): Promise<PeriodoAcademico[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<PeriodoAcademico | null> {
    return this.repo.findOne({ where: { id_periodo_academico: id } });
  }

  async create(dto: CreatePeriodoAcademicoDto): Promise<PeriodoAcademico> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async update(
    id: number,
    dto: UpdatePeriodoAcademicoDto,
  ): Promise<PeriodoAcademico | null> {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
