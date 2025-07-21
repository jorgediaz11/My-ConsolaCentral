import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('adminsec')
export class AdminSec {
  @PrimaryGeneratedColumn({ name: 'id_adminsec' })
  id_adminsec: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;

  @Column({ type: 'int' })
  id_perfil: number; // Perfil directivo, ejemplo: 2

  @Column({ type: 'int' })
  id_colegio: number; // Colegio al que pertenece
}
