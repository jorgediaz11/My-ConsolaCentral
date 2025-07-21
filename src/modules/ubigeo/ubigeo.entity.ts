import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('dep')
export class Ubigeo {
  @PrimaryColumn({ name: 'ubigeo', type: 'varchar', length: 6 })
  ubigeo: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  departamento?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  provincia?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  distrito?: string;

  @Column({ type: 'char', length: 1 })
  tipo: string;
}