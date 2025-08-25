import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Unidad } from '../unidad/unidad.entity';

@Entity('leccion')
export class Leccion {
  @PrimaryGeneratedColumn({ name: 'id_leccion' })
  id_leccion: number;

  @Column({ type: 'int', name: 'id_unidad' })
  id_unidad: number; // <-- Este campo es obligatorio

  @ManyToOne(() => Unidad, (unidad) => unidad.lecciones)
  @JoinColumn({ name: 'id_unidad' })
  unidad: Unidad;

  @Column()
  titulo: string;

  @Column()
  contenido: string;

  @Column({ type: 'boolean' })
  estado: boolean;

  // otros campos si los tienes
}
