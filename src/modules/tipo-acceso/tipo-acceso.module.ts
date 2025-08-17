import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoAcceso } from './tipo-acceso.entity';
import { TipoAccesoService } from './tipo-acceso.service';
import { TipoAccesoController } from './tipo-acceso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoAcceso])],
  providers: [TipoAccesoService],
  controllers: [TipoAccesoController],
})
export class TipoAccesoModule {}
