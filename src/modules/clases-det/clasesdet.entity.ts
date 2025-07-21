import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clases_det')
export class ClasesDet {
  @PrimaryGeneratedColumn({ name: 'id_clases' })
  id_clases: number;

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'int' })
  id_estudiante: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observaciones: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;
}
