import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import {
  CuestionarioDetalleDto,
  PreguntaDto,
} from './dto/CuestionariodetalleDto';

@Injectable()
export class CuestionarioDetalleService {
  constructor(private readonly dataSource: DataSource) {}

  async findById(
    id_cuestionario: number,
  ): Promise<CuestionarioDetalleDto | null> {
    try {
      const rows: Array<{
        id_cuestionario: number;
        nombre_cuestionario: string;
        id_pregunta: number;
        tipo_pregunta: string;
        nombre_pregunta: string;
        puntaje_pregunta: number;
        id_opcion?: number;
        nombre_opcion?: string;
        es_correcta?: boolean;
        par_relacion?: string;
      }> = await this.dataSource.query(
        `SELECT c.id_cuestionario, c.titulo AS nombre_cuestionario, p.id_pregunta, tp.nombre AS tipo_pregunta,
                p.enunciado AS nombre_pregunta, p.puntaje AS puntaje_pregunta, o.id_opcion, o.texto AS nombre_opcion, o.es_correcta, o.par_relacion
        FROM cuestionario c
        INNER JOIN pregunta p ON c.id_cuestionario = p.id_cuestionario
        INNER JOIN tipo_pregunta tp ON p.id_tipo_pregunta = tp.id_tipo_pregunta
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
              nombre_opcion: row.nombre_opcion ?? '',
              es_correcta: row.es_correcta ?? false,
              par_relacion: row.par_relacion,
            });
          }
        }
      }

      return cuestionario;
    } catch (error) {
      console.error('Error in findById:', error);
      return null;
    }
  }
}
