import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('periodoacademico')
export class PeriodoAcademico {
  @PrimaryGeneratedColumn()
  id_periodo_academico: number;

  @Column({ unique: true })
  nombre: string;

  @Column({ unique: true })
  anio: number;

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;

  @Column({ default: true })
  esta_activo: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_creacion: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  fecha_actualizacion: Date;
}
