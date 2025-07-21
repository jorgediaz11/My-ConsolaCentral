import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('activar_libro')
export class ActivarLibro {
  @PrimaryGeneratedColumn({ name: 'id_activacion' })
  id_activacion: number;

  @Column({ type: 'int' })
  id_libro: number;

  @Column({ type: 'int' })
  id_curso: number;

  @Column({ type: 'int' })
  id_colegio: number;

  @Column({ type: 'int' })
  id_estudiante: number;

  @Column({ type: 'varchar', length: 20 })
  codigo_libro: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;
}
