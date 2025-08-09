import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('opcion')
export class Opcion {
  @PrimaryGeneratedColumn({ name: 'id_opcion' })
  id_opcion: number;

  @Column({ type: 'int' })
  id_pregunta: number;

  @Column({ type: 'text' })
  texto: string;

  @Column({ type: 'boolean' })
  es_correcta: boolean;

  @Column({ type: 'varchar', length: 100 })
  par_relacion: string;

  @Column({ type: 'int' })
  orden: number;
}
