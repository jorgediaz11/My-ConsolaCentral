import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class Docente {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_docente: number;

  @Column({ type: 'varchar', length: 100 })
  nombres: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  // @Column({ type: 'varchar', length: 100 })
  // especialidad: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'int' })
  id_perfil: number;

  @Column({ type: 'int' })
  id_colegio: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  direccion: string;

  @Column({ type: 'date', nullable: true })
  fecha_nacimiento: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  docente_titulo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  foto_perfil: string;

  @Column({ type: 'timestamp', nullable: true })
  ultimo_acceso: Date;
}
