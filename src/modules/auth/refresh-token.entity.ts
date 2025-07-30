import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('refresh_token')
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  token: string;
}
