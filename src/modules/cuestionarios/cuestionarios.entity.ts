import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cuestionario')
export class Cuestionario {
  @PrimaryGeneratedColumn({ name: 'id_cuestionario' })
  id_cuestionario: number;

  @Column({ type: 'int' })
  id_libro: number;

  @Column({ type: 'int' })
  id_unidad: number;

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'int' })
  id_clasecol: number;

  @Column({ type: 'varchar', length: 255 })
  titulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'int' })
  creador_id: number;

  @Column({ type: 'timestamp' })
  fecha_creacion: Date;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
