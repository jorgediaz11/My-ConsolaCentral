import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { ClasesCol } from './clasescol.entity';
import { CreateClasesColDto } from './dto/CreateClasesColDto';
import { UpdateClasesColDto } from './dto/UpdateClasesColDto';
//import { ClasesDet } from '../clases-det/clasesdet.entity';

@Injectable()
export class ClasesColService {
  constructor(
    @InjectRepository(ClasesCol)
    private clasesColRepository: Repository<ClasesCol>,
    private dataSource: DataSource,
  ) {}

  findAll(): Promise<ClasesCol[]> {
    return this.clasesColRepository.find();
  }

  findOne(id_clases: number): Promise<ClasesCol | null> {
    return this.clasesColRepository.findOneBy({ id_clases: id_clases });
  }

  async findClasesByColegio(id_colegio: number): Promise<any[]> {
    return this.dataSource.query(
      `SELECT n.nombre AS nivel, g.nombre AS grado, s.nombre AS seccion, c.nombre AS nombre_clase
       FROM clases_col c
       INNER JOIN nivel n ON c.id_nivel = n.id_nivel
       INNER JOIN grado g ON c.id_grado = g.id_grado
       INNER JOIN seccion s ON c.id_seccion = s.id_seccion
       WHERE c.estado = TRUE AND c.id_colegio = $1`,
      [id_colegio],
    );
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
