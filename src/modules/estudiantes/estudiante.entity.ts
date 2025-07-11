import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estudiante')
export class Estudiante {
  @PrimaryGeneratedColumn({ name: 'id_estudiante' })
  id_estudiante: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  grado: string;

  @Column()
  estado: string;
}
