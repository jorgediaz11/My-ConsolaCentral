import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('activarlibro')
export class ActivarLibro {
  @PrimaryGeneratedColumn({ name: 'id_activacion' })
  id_activacion: number;

  @Column({ type: 'int' })
  id_libro: number;

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'int' })
  id_colegio: number;

  @Column({ type: 'int' })
  id_estudiante: number;

  @Column({ type: 'varchar', length: 20 })
  codigo_libro: string;

  @Column({ type: 'boolean', default: false })
  estado: boolean;

  @Column({ type: 'int' })
  id_grado: number;
}
