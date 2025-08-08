import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Area } from '../area/area.entity';
import { Grado } from '../grado/grado.entity';
import { Unidad } from '../unidad/unidad.entity';

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

  @Column({ type: 'varchar', length: 10 })
  codigo_libro: string; // Nuevo campo: código del libro

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'varchar', length: 10 })
  tipo_curso: string; // 'Interno' o 'Externo'

  @Column({ type: 'int' })
  id_colegio: number; // ID del colegio afiliado

  @OneToMany(() => Unidad, unidad => unidad.curso)
  unidades: Unidad[];
}
