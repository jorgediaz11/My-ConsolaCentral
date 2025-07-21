import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('colegio') // Asegúrate de que el nombre coincida con tu tabla en la base de datos
export class Colegio {
  @PrimaryGeneratedColumn({ name: 'id_colegio' })
  id_colegio: number;

  // @Column()
  // nombre: string;

  // @Column()
  // direccion: string;

  // @Column()
  // telefono: string;

  // @Column()
  // correo: string;

  // @Column()
  // estado: string;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 200 })
  direccion: string;

  @Column({ type: 'varchar', length: 20 })
  telefono: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;

  @Column({ type: 'varchar', length: 6 })
  ubigeo: string; // Nuevo campo para el código de distrito
}
