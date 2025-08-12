import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('actividad_educativa')
export class ActividadEducativa {
  @PrimaryGeneratedColumn({ name: 'id_actividad' })
  id_actividad: number;

  @Column({ type: 'int' })
  id_colegio: number;

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'int' })
  id_clasecol: number;

  @Column({ type: 'int' })
  id_libro: number;

  @Column({ type: 'int' })
  id_unidad: number;

  @Column({ type: 'varchar', length: 255 })
  titulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'int' })
  id_tipo_actividad: number;

  @Column({ type: 'int' })
  creador_id: number;

  @Column({ type: 'timestamp' })
  fecha_creacion: Date;

  @Column({ type: 'timestamp' })
  fecha_limite: Date;

  @Column({ type: 'varchar', length: 255 })
  recurso_url: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
