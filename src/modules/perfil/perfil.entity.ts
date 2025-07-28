import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('perfil')
export class Perfil {
  @PrimaryGeneratedColumn({ name: 'id_perfil' })
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'boolean' })
  estado: boolean; // Nuevo campo para el estado del perfil
}
