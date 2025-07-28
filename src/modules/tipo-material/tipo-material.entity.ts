import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_material')
export class TipoMaterial {
  @PrimaryGeneratedColumn({ name: 'id_tipo_material' })
  id_tipo_material: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'boolean' })
  estado: boolean;
}
