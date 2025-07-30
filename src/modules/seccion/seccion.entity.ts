import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('seccion')
export class Seccion {
  @PrimaryGeneratedColumn({ name: 'id_seccion' })
  id_seccion: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
