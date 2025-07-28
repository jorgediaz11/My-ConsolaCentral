import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class Estudiante {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_estudiante: number;

  @Column({ type: 'varchar', length: 100 })
  nombres: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  // @Column({ type: 'varchar', length: 50 })
  // grado: string;

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

  // @Column({ type: 'text', nullable: true })
  // editor_metadata: string;

  // @Column({ type: 'varchar', length: 100, nullable: true })
  // editor_privilegios: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  foto_perfil: string;

  @Column({ type: 'timestamp', nullable: true })
  ultimo_acceso: Date;
}
