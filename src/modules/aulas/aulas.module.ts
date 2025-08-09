import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aula } from './aulas.entity';
import { AulasService } from './aulas.service';
import { AulasController } from './aulas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Aula])],
  providers: [AulasService],
  controllers: [AulasController],
})
export class AulasModule {}
