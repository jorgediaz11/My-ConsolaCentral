import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregaActividad } from './entregas.entity';
import { EntregasService } from './entregas.service';
import { EntregasController } from './entregas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EntregaActividad])],
  providers: [EntregasService],
  controllers: [EntregasController],
})
export class EntregasModule {}
