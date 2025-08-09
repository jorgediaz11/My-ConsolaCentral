import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('entrega_actividad')
export class EntregaActividad {
  @PrimaryGeneratedColumn({ name: 'id_entrega' })
  id_entrega: number;

  @Column({ type: 'int' })
  id_actividad: number;

  @Column({ type: 'int' })
  id_estudiante: number;

  @Column({ type: 'int' })
  id_clasecol: number;

  @Column({ type: 'text' })
  respuesta_texto: string;

  @Column({ type: 'varchar', length: 255 })
  respuesta_archivo: string;

  @Column({ type: 'int' })
  puntaje_obtenido: number;

  @Column({ type: 'timestamp' })
  fecha_entrega: Date;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
