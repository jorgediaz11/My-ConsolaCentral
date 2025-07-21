import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('area')
export class Area {
  @PrimaryGeneratedColumn({ name: 'id_area' })
  id_area: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'varchar', length: 10 })
  tipo_curso: string; // 'Interno' o 'Externo'
}
