import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('colegio')
export class Colegio {
  @PrimaryGeneratedColumn()
  id_colegio: number;

  @Column({ type: 'varchar', length: 150 })
  nombre: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  direccion: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  correo: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'varchar', length: 20, nullable: true })
  codigomodular: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  website: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  logo: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  director: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  niveleseducativos: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  turnos: string;

  @Column({ type: 'int', nullable: true })
  poblacion: number;

  @Column({ type: 'date', nullable: true })
  fechafundacion: Date;

  @Column({ type: 'timestamp', nullable: true })
  fechacreacion: Date;

  @Column({ type: 'timestamp', nullable: true })
  fechaactualizacion: Date;

  @Column({ type: 'int', nullable: true })
  id_departamento: number;

  @Column({ type: 'int', nullable: true })
  id_provincia: number;

  @Column({ type: 'int', nullable: true })
  id_distrito: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  id_ubigeo: string;

  @Column({ type: 'boolean', default: false })
  colegio_cliente: boolean;
}
