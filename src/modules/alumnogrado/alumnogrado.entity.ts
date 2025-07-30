import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alumno_grado')
export class AlumnoGrado {
  @PrimaryGeneratedColumn()
  id_alumno_grado: number;

  @Column()
  id_usuario: number;

  @Column()
  id_grado: number;

  @Column()
  anio_escolar: number;

  @Column()
  estado: boolean;

  @Column()
  id_periodo_academico: number;
}
