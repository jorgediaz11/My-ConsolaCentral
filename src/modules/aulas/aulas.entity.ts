import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('aulas')
export class Aula {
  @PrimaryGeneratedColumn({ name: 'id_aula' })
  id_aula: number;

  @Column({ type: 'int' })
  id_colegio: number;

  @Column({ type: 'int' })
  id_grado: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'int' })
  capacidad: number;

  @Column({ type: 'varchar', length: 50 })
  tipo_aula: string;

  @Column({ type: 'int' })
  creador_id: number;

  @Column({ type: 'timestamp' })
  fecha_creacion: Date;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
