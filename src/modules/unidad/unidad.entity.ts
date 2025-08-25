import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Cursos } from '../cursos/cursos.entity';
import { Leccion } from '../leccion/leccion.entity';

@Entity('unidad')
export class Unidad {
  @PrimaryGeneratedColumn({ name: 'id_unidad' })
  id_unidad: number;

  @Column({ type: 'int', name: 'id_curso' })
  id_curso: number; // <-- Solo este campo

  @ManyToOne(() => Cursos, (curso) => curso.unidades)
  @JoinColumn({ name: 'id_curso' })
  curso: Cursos;

  @Column()
  nombre: string;

  @Column()
  orden: number;

  @Column()
  descripcion: string;

  @Column({ type: 'boolean' })
  estado: boolean;

  @OneToMany(() => Leccion, (leccion) => leccion.unidad)
  lecciones: Leccion[];
}
