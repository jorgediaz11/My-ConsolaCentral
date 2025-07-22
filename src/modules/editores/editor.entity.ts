import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('editor')
export class Editor {
  @PrimaryGeneratedColumn({ name: 'id_editor' })
  id_editor: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;

  @Column({ type: 'int' })
  id_perfil: number;

  @Column('int', { array: true })
  id_cursos: number[]; // Cursos a los que tiene acceso
}
