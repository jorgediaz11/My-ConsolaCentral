import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('libros')
export class Libro {
  @PrimaryGeneratedColumn({ name: 'id_libro' })
  id_libro: number;

  @Column({ type: 'varchar', length: 50 })
  codigointerno: string;

  @Column({ type: 'varchar', length: 20 })
  isbn: string;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', length: 50 })
  lineanegocio: string;

  @Column({ type: 'int' })
  id_nivel: number;

  @Column({ type: 'varchar', length: 100 })
  coleccion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  costolibro: number;

  @Column({ type: 'varchar', length: 20 })
  estado: string;
}
