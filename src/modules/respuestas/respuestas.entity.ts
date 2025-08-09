import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('respuesta_estudiante')
export class RespuestaEstudiante {
  @PrimaryGeneratedColumn({ name: 'id_respuesta' })
  id_respuesta: number;

  @Column({ type: 'int' })
  id_pregunta: number;

  @Column({ type: 'int' })
  id_estudiante: number;

  @Column({ type: 'int' })
  id_cuestionario: number;

  @Column({ type: 'varchar', length: 255 })
  respuesta_valor: string;

  @Column({ type: 'int' })
  id_opcion_seleccionada: number;

  @Column({ type: 'varchar', length: 255 })
  respuesta_relacion: string;

  @Column({ type: 'text' })
  respuesta_texto: string;

  @Column({ type: 'varchar', length: 255 })
  respuesta_archivo: string;

  @Column({ type: 'int' })
  puntaje_obtenido: number;

  @Column({ type: 'timestamp' })
  fecha_respuesta: Date;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
