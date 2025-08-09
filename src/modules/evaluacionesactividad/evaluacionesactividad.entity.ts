import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('evaluacion_actividad')
export class EvaluacionActividad {
  @PrimaryGeneratedColumn({ name: 'id_evaluacion' })
  id_evaluacion: number;

  @Column({ type: 'int' })
  id_actividad: number;

  @Column({ type: 'int' })
  id_estudiante: number;

  @Column({ type: 'int' })
  id_clasecol: number;

  @Column({ type: 'int' })
  puntaje_total: number;

  @Column({ type: 'boolean', default: false })
  completado: boolean;

  @Column({ type: 'timestamp' })
  fecha_completado: Date;
}
