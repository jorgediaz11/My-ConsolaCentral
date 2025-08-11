import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CursoDetalleDto } from './dto/CursoDetalleDto';

@Injectable()
export class CursoDetalleService {
  constructor(private dataSource: DataSource) {}

  async findById(id_curso: number): Promise<CursoDetalleDto | null> {
    interface CursoDetalleRow {
      id_curso: number;
      nombre_curso: string;
      descripcion_curso: string;
      id_unidad: number;
      nombre_unidad: string;
      orden_unidad: number;
      descripcion_unidad: string;
      id_leccion: number;
      titulo_leccion: string;
      contenido_leccion: string;
    }

    const rows: CursoDetalleRow[] = await this.dataSource.query(
      `SELECT c.id_curso, c.nombre AS nombre_curso, c.nombre AS descripcion_curso, 
              u.id_unidad, u.nombre AS nombre_unidad, u.orden AS orden_unidad, u.descripcion AS descripcion_unidad, 
              l.id_leccion, l.titulo AS titulo_leccion, l.contenido AS contenido_leccion
       FROM curso c
       LEFT JOIN unidad u ON u.id_curso = c.id_curso
       LEFT JOIN leccion l ON l.id_unidad = u.id_unidad
       WHERE c.id_curso = $1 AND c.estado=true AND u.estado=true AND l.estado=true
       ORDER BY id_unidad ASC, orden_unidad ASC;`,
      [id_curso],
    );

    if (!rows.length) return null;

    // Agrupar resultados en la estructura anidada del DTO
    const curso: CursoDetalleDto = {
      id_curso: rows[0].id_curso,
      nombre_curso: rows[0].nombre_curso,
      descripcion_curso: rows[0].descripcion_curso,
      unidades: [],
    };

    type UnidadDetalle = {
      id_unidad: number;
      nombre_unidad: string;
      orden_unidad: number;
      descripcion_unidad: string;
      lecciones: {
        id_leccion: number;
        titulo_leccion: string;
        contenido_leccion: string;
      }[];
    };

    const unidadesMap = new Map<number, UnidadDetalle>();
    for (const row of rows) {
      if (!unidadesMap.has(row.id_unidad)) {
        const unidad = {
          id_unidad: row.id_unidad,
          nombre_unidad: row.nombre_unidad,
          orden_unidad: row.orden_unidad,
          descripcion_unidad: row.descripcion_unidad,
          lecciones: [],
        };
        unidadesMap.set(row.id_unidad, unidad);
        curso.unidades.push(unidad);
      }
      if (row.id_leccion) {
        const unidad = unidadesMap.get(row.id_unidad);
        if (unidad) {
          unidad.lecciones.push({
            id_leccion: row.id_leccion,
            titulo_leccion: row.titulo_leccion,
            contenido_leccion: row.contenido_leccion,
          });
        }
      }
    }

    return curso;
  }
}
