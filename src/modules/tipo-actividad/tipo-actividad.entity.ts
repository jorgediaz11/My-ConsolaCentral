import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_actividad')
export class TipoActividad {
  @PrimaryGeneratedColumn({ name: 'id_tipo_actividad' })
  id_tipo_actividad: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion?: Date;
}
