import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('material')
export class Material {
  @PrimaryGeneratedColumn({ name: 'id_material' })
  id: number;

  @Column({ name: 'id_usuario_creador' })
  idUsuarioCreador: number;

  @Column({ name: 'id_tipo_material' })
  idTipoMaterial: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ name: 'ruta_archivo' })
  rutaArchivo: string;

  @Column({ name: 'tamano_bytes', type: 'bigint', nullable: true })
  tamanoBytes: number;

  @Column({ name: 'duracion_segundos', type: 'int', nullable: true })
  duracionSegundos: number;

  @Column({ name: 'fecha_creacion', type: 'timestamp' })
  fechaCreacion: Date;

  @Column({ name: 'id_configuracion' })
  idConfiguracion: number;

  @Column({ type: 'boolean' })
  estado: boolean; // Indica si el material está activo o inactivo
}
