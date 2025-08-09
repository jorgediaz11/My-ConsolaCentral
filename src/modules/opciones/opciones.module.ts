import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opcion } from './opciones.entity';
import { OpcionesService } from './opciones.service';
import { OpcionesController } from './opciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Opcion])],
  providers: [OpcionesService],
  controllers: [OpcionesController],
})
export class OpcionesModule {}