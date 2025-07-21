import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('nivel')
export class Nivel {
  @PrimaryGeneratedColumn({ name: 'id_nivel' })
  id_nivel: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean; // Opcional, por defecto true
}
