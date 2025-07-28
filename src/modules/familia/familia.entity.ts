import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuario')
export class Familia {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id_familia: number;

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
  estudiante_codigo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  foto_perfil: string;

  @Column({ type: 'timestamp', nullable: true })
  ultimo_acceso: Date;

  @Column({ type: 'int', default: 5 })
  id_perfil: number; // Perfil familia, ejemplo: 5

  @Column({ type: 'int' })
  id_colegio: number; // Colegio al que pertenece el estudiante
}
