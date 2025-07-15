import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('unidad')
export class Unidad {
  @PrimaryGeneratedColumn({ name: 'id_unidad' })
  id: number;

  @Column({ name: 'id_curso' })
  idCurso: number;

  @Column()
  nombre: string;

  @Column()
  orden: number;

  @Column({ type: 'boolean' })
  estado: boolean;
}
