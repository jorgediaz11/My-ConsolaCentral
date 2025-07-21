import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClasesCol } from './clasescol.entity';
import { CreateClasesColDto } from './dto/CreateClasesColDto';
import { UpdateClasesColDto } from './dto/UpdateClasesColDto';

@Injectable()
export class ClasesColService {
  constructor(
    @InjectRepository(ClasesCol)
    private clasesColRepository: Repository<ClasesCol>,
  ) {}

  findAll(): Promise<ClasesCol[]> {
    return this.clasesColRepository.find();
  }

  findOne(id: number): Promise<ClasesCol | null> {
    return this.clasesColRepository.findOneBy({ id_clases: id });
  }

  async create(dto: CreateClasesColDto): Promise<ClasesCol> {
    const clase = this.clasesColRepository.create(dto);
    return await this.clasesColRepository.save(clase);
  }

  async update(id: number, dto: UpdateClasesColDto): Promise<ClasesCol | null> {
    await this.clasesColRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clasesColRepository.delete(id);
  }

  // Filtrar por id_colegio
  async findByColegio(id_colegio: number): Promise<ClasesCol[]> {
    return this.clasesColRepository.find({ where: { id_colegio } });
  }
}
