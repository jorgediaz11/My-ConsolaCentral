import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('leccion')
export class Leccion {
  @PrimaryGeneratedColumn({ name: 'id_leccion' })
  id: number;

  @Column({ name: 'id_unidad' })
  idUnidad: number;

  @Column()
  titulo: string;

  @Column()
  contenido: string;

  @Column({ name: 'id_configuracion' })
  idConfiguracion: number;

  @Column({ type: 'boolean' })
  estado: boolean;
}
