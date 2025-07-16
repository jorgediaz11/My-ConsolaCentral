import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('docente')
export class Docente {
  @PrimaryGeneratedColumn({ name: 'id_docente' })
  id_docente: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  especialidad: string;

  @Column()
  estado: string;
}
