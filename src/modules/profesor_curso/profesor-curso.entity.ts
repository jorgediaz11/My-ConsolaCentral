import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profesor_curso')
export class ProfesorCurso {
  @PrimaryGeneratedColumn({ name: 'id_profesor_curso' })
  id_profesor_curso: number;

  @Column({ type: 'int' })
  id_usuario: number;

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
