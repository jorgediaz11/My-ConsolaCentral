import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Unidad } from '../unidad/unidad.entity';

@Entity('leccion')
export class Leccion {
  @PrimaryGeneratedColumn({ name: 'id_leccion' })
  id: number;

  @Column({ name: 'id_unidad' })
  idUnidad: number;

  @ManyToOne(() => Unidad, unidad => unidad.lecciones)
  @JoinColumn({ name: 'id_unidad' })
  unidad: Unidad;

  @Column()
  titulo: string;

  @Column()
  contenido: string;

  @Column({ type: 'boolean' })
  estado: boolean;
}
