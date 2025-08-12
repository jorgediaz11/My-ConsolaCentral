import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_pregunta')
export class TipoPregunta {
  @PrimaryGeneratedColumn({ name: 'id_tipo_pregunta' })
  id_tipo_pregunta: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'timestamp' })
  fecha_creacion: Date;
}
