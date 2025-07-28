import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clases_col')
export class ClasesCol {
  @PrimaryGeneratedColumn({ name: 'id_clases' })
  id_clases: number;

  @Column({ type: 'int' })
  id_colegio: number;

  @Column({ type: 'int' })
  id_docente: number;

  @Column({ type: 'int' })
  id_nivel: number;

  @Column({ type: 'int' })
  id_grado: number;

  @Column({ type: 'int' })
  id_seccion: number;

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observaciones: string;

  @Column({ type: 'boolean' })
  estado: boolean;
}
