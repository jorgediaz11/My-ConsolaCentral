import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_acceso')
export class TipoAcceso {
  @PrimaryGeneratedColumn({ name: 'id_tipo_acceso' })
  id_tipo_acceso: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'timestamp' })
  fecha_creacion: Date;
}
