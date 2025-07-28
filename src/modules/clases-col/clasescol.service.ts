import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClasesCol } from './clasescol.entity';
import { CreateClasesColDto } from './dto/CreateClasesColDto';
import { UpdateClasesColDto } from './dto/UpdateClasesColDto';
//import { ClasesDet } from '../clases-det/clasesdet.entity';

@Injectable()
export class ClasesColService {
  constructor(
    @InjectRepository(ClasesCol)
    private clasesColRepository: Repository<ClasesCol>,
    // @InjectRepository(ClasesDet)
    // private claseDetRepository: Repository<ClasesDet>,
  ) {}

  findAll(): Promise<ClasesCol[]> {
    return this.clasesColRepository.find();
  }

  findOne(id_clases: number): Promise<ClasesCol | null> {
    return this.clasesColRepository.findOneBy({ id_clases: id_clases });
  }

  async create(dto: CreateClasesColDto): Promise<ClasesCol> {
    const clase = this.clasesColRepository.create(dto);
    return await this.clasesColRepository.save(clase);
  }

  async update(
    id_clases: number,
    dto: UpdateClasesColDto,
  ): Promise<ClasesCol | null> {
    await this.clasesColRepository.update(id_clases, dto);
    return this.findOne(id_clases);
  }

  async remove(id_clases: number): Promise<void> {
    await this.clasesColRepository.delete(id_clases);
  }

  // Filtrar por id_colegio
  async findByColegio(id_colegio: number): Promise<ClasesCol[]> {
    return this.clasesColRepository.find({ where: { id_colegio } });
  }

  // Filtrar por id_docente
  async findByDocente(id_docente: number): Promise<ClasesCol[]> {
    return this.clasesColRepository.find({ where: { id_docente } });
  }
}
