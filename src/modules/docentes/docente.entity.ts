import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('docente')
export class Docente {
  @PrimaryGeneratedColumn({ name: 'id_docente' })
  id_docente: number;

  // @Column()
  // nombre: string;

  // @Column()
  // apellido: string;

  // @Column()
  // correo: string;

  // @Column()
  // especialidad: string;

  // @Column()
  // estado: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  @Column({ type: 'varchar', length: 100 })
  especialidad: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;

  @Column({ type: 'int' })
  id_perfil: number;

  @Column({ type: 'int' })
  id_colegio: number;
}
