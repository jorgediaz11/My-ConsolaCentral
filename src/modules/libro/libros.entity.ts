import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Libros')
export class Libro {
  @PrimaryGeneratedColumn({ name: 'id_libro' })
  id_libro: number;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', length: 20 })
  estado: string;

  @Column({ type: 'varchar', length: 20 })
  codigo_libro: string;
}
