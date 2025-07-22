import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estudiante')
export class Estudiante {
  @PrimaryGeneratedColumn({ name: 'id_estudiante' })
  id_estudiante: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  @Column({ type: 'varchar', length: 50 })
  grado: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;

  @Column({ type: 'int' })
  id_perfil: number;

  @Column({ type: 'int' })
  id_colegio: number;
}
