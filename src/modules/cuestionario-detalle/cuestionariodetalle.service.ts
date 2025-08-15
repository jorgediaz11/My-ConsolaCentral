import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuestionarioDetalleEntity } from './cuestionariodetalle.entity';
import { DataSource } from 'typeorm';
import { CuestionarioDetalleDto, PreguntaDto, OpcionDto } from './dto/CuestionariodetalleDto';

@Injectable()
export class CuestionarioDetalleService {
  constructor(
    @InjectRepository(CuestionarioDetalleEntity)
    private readonly cuestionarioRepo: Repository<CuestionarioDetalleEntity>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll(): Promise<CuestionarioDetalleEntity[]> {
    return this.cuestionarioRepo.find();
  }

  async findOne(id: number): Promise<CuestionarioDetalleEntity | null> {
    return this.cuestionarioRepo.findOne({ where: { id_cuestionario: id } });
  }

  async findById(id_cuestionario: number): Promise<CuestionarioDetalleDto | null> {
    const rows = await this.dataSource.query(
      `SELECT c.id_cuestionario, c.titulo AS nombre_cuestionario, p.id_pregunta, p.tipo_pregunta, p.enunciado AS nombre_pregunta,
              p.puntaje AS puntaje_pregunta, o.id_opcion, o.texto AS nombre_opcion, o.es_correcta, o.par_relacion
       FROM cuestionario c INNER JOIN pregunta p ON c.id_cuestionario = p.id_cuestionario
            LEFT JOIN opcion o ON p.id_pregunta = o.id_pregunta
       WHERE c.id_cuestionario = $1
       ORDER BY p.orden ASC, o.orden ASC;`,
      [id_cuestionario],
    );

    if (!rows.length) return null;

    const cuestionario: CuestionarioDetalleDto = {
      id_cuestionario: rows[0].id_cuestionario,
      nombre_cuestionario: rows[0].nombre_cuestionario,
      preguntas: [],
    };

    const preguntasMap = new Map<number, PreguntaDto>();
    for (const row of rows) {
      if (!preguntasMap.has(row.id_pregunta)) {
        const pregunta: PreguntaDto = {
          id_pregunta: row.id_pregunta,
          tipo_pregunta: row.tipo_pregunta,
          nombre_pregunta: row.nombre_pregunta,
          puntaje_pregunta: row.puntaje_pregunta,
          opciones: [],
        };
        preguntasMap.set(row.id_pregunta, pregunta);
        cuestionario.preguntas.push(pregunta);
      }
      if (row.id_opcion) {
        const pregunta = preguntasMap.get(row.id_pregunta);
        if (pregunta) {
          pregunta.opciones.push({
            id_opcion: row.id_opcion,
            nombre_opcion: row.nombre_opcion,
            es_correcta: row.es_correcta,
            par_relacion: row.par_relacion,
          });
        }
      }
    }

    return cuestionario;
  }
}
