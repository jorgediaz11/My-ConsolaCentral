import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clases_det')
export class ClasesDet {
  @PrimaryGeneratedColumn({ name: 'id_clasedet' })
  id_clasedet: number;

  @Column({ type: 'int' })
  id_clasecol: number; // <-- Agregado

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'int' })
  id_estudiante: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observaciones: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;
}
