import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('familia')
export class Familia {
  @PrimaryGeneratedColumn({ name: 'id_familia' })
  id_familia: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apellido: string;

  @Column({ type: 'varchar', length: 100 })
  correo: string;

  @Column({ type: 'varchar', length: 10 })
  estado: string;

  @Column({ type: 'int' })
  id_perfil: number; // Perfil familia, ejemplo: 5

  @Column({ type: 'int' })
  id_colegio: number; // Colegio al que pertenece el estudiante
}
