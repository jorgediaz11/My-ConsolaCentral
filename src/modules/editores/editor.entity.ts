import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class Editor {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_editor: number;

  @Column({ type: 'varchar', length: 100 })
  nombres: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  direccion: string;

  @Column({ type: 'date', nullable: true })
  fecha_nacimiento: Date;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'varchar', length: 50, nullable: true })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  familia_relacion: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  foto_perfil: string;

  @Column({ type: 'timestamp', nullable: true })
  ultimo_acceso: Date;

  @Column({ type: 'int', default: 6 })
  id_perfil: number;

  @Column({ type: 'int' })
  id_colegio: number;

  // @Column('int', { array: true })
  // id_cursos: number[]; // Cursos a los que tiene acceso
}
