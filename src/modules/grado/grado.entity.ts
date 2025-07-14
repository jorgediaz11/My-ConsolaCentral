import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Nivel } from '../nivel/nivel.entity';

@Entity('grado')
export class Grado {
  @PrimaryGeneratedColumn({ name: 'id_grado' })
  id_grado: number;

  @ManyToOne(() => Nivel)
  @JoinColumn({ name: 'id_nivel' })
  nivel: Nivel;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
