import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClasesDet } from './clasesdet.entity';
import { CreateClasesDetDto } from './dto/CreateClasesDetDto';
import { UpdateClasesDetDto } from './dto/UpdateClasesDetDto';

@Injectable()
export class ClasesDetService {
  constructor(
    @InjectRepository(ClasesDet)
    private clasesDetRepository: Repository<ClasesDet>,
  ) {}

  findAll(): Promise<ClasesDet[]> {
    return this.clasesDetRepository.find();
  }

  findOne(id: number): Promise<ClasesDet | null> {
    return this.clasesDetRepository.findOneBy({ id_clasedet: id });
  }

  async create(dto: CreateClasesDetDto): Promise<ClasesDet> {
    const claseDet = this.clasesDetRepository.create(dto);
    return await this.clasesDetRepository.save(claseDet);
  }

  async update(id: number, dto: UpdateClasesDetDto): Promise<ClasesDet | null> {
    await this.clasesDetRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clasesDetRepository.delete(id);
  }

  // Filtrar por id_clases
  // async findByClases(id_clases: number): Promise<ClasesDet[]> {
  //   return this.clasesDetRepository.find({ where: { id_clases } });
  // }
}
