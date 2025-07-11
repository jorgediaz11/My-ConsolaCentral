import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('colegio') // Asegúrate de que el nombre coincida con tu tabla en la base de datos
export class Colegio {
  @PrimaryGeneratedColumn({ name: 'id_colegio' })
  id_colegio: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  @Column()
  estado: string;
}
