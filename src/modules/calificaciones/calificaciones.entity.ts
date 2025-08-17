import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('calificacion')
export class Calificacion {
  @PrimaryGeneratedColumn({ name: 'id_calificacion' })
  id_calificacion: number;

  @Column({ type: 'int' })
  id_alumno: number;

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'int' })
  id_evaluador: number;

  @Column({ type: 'int' })
  id_material: number;

  @Column({ type: 'int' })
  id_leccion: number;

  @Column({ type: 'int' })
  id_unidad: number;

  @Column({ type: 'int' })
  puntuacion: number;

  @Column({ type: 'timestamp' })
  fecha_evaluacion: Date;

  @Column({ type: 'text' })
  comentario: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
