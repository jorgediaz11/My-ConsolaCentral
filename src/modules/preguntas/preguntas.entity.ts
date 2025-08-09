import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pregunta')
export class Pregunta {
  @PrimaryGeneratedColumn({ name: 'id_pregunta' })
  id_pregunta: number;

  @Column({ type: 'int' })
  id_cuestionario: number;

  @Column({ type: 'varchar', length: 50 })
  tipo_pregunta: string;

  @Column({ type: 'text' })
  enunciado: string;

  @Column({ type: 'int' })
  puntaje: number;

  @Column({ type: 'int' })
  orden: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
