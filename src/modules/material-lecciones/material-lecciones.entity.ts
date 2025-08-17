import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('material_leccion')
export class MaterialLeccion {
  @PrimaryGeneratedColumn({ name: 'id_material_leccion' })
  id_material_leccion: number;

  @Column({ type: 'int' })
  id_material: number;

  @Column({ type: 'int' })
  id_leccion: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;
}
