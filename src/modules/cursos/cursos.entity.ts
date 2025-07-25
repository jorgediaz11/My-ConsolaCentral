import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Area } from '../area/area.entity';
import { Grado } from '../grado/grado.entity';

@Entity('curso')
export class Cursos {
  @PrimaryGeneratedColumn({ name: 'id_curso' })
  id_curso: number;

  @ManyToOne(() => Area)
  @JoinColumn({ name: 'id_area' })
  area: Area;

  @ManyToOne(() => Grado)
  @JoinColumn({ name: 'id_grado' })
  grado: Grado;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 12 })
  codigo_libro: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'varchar', length: 10 })
  tipo_curso: string; // 'Interno' o 'Externo'

  @Column({ type: 'int' })
  id_colegio: number; // ID del colegio afiliado
}
