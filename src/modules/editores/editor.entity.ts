import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('editor')
export class Editor {
  @PrimaryGeneratedColumn({ name: 'id_editor' })
  id_editor: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  estado: string;
}
