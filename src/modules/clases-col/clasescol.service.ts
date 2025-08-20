import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { ClasesCol } from './clasescol.entity';
import { CreateClasesColDto } from './dto/CreateClasesColDto';
import { UpdateClasesColDto } from './dto/UpdateClasesColDto';
//import { ClasesDet } from '../clases-det/clasesdet.entity';

@Injectable()
export class ClasesColService {
  async findDetalleById(id_clases: number): Promise<any> {
    return this.dataSource.query(
      `SELECT cc.id_clases, cc.id_colegio, col.nombre AS nombre_colegio, cc.id_docente, (u.nombres || ' ' || u.apellido) AS nombre_docente, cc.id_nivel,
              n.nombre AS nombre_nivel, cc.id_grado, g.nombre AS nombre_grado, cc.id_seccion, s.nombre AS nombre_seccion, cc.id_curso, cu.nombre AS nombre_curso, cc.estado
       FROM clases_col cc INNER JOIN colegio col ON cc.id_colegio = col.id_colegio INNER JOIN usuario u ON cc.id_docente = u.id_usuario
            INNER JOIN nivel n ON cc.id_nivel = n.id_nivel INNER JOIN grado g ON cc.id_grado = g.id_grado INNER JOIN seccion s ON cc.id_seccion = s.id_seccion
            INNER JOIN curso cu ON cc.id_curso = cu.id_curso
       WHERE cc.id_clases = $1
       ORDER BY 1`,
      [id_clases],
    );
  }
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

  async findAllDetalle(): Promise<any[]> {
    const result = await this.dataSource.query(
      `SELECT id_clases, id_colegio, nombre_colegio, id_docente, nombre_docente, id_nivel, nombre_nivel, id_grado, nombre_grado, id_seccion, nombre_seccion, id_curso, nombre_curso, estado FROM public."vistaClasesCol";`
    );
    console.log('findAllDetalle result:', result);
    return result;
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
