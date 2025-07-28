// src/modules/ubigeo/ubigeo.module.ts
// Este módulo define la entidad Ubigeo y sus operaciones CRUD.
// Importa el servicio y el controlador de Ubigeo, y configura TypeORM para trabajar con la entidad Ubigeo.
// E13: Módulo de Ubigeo que gestiona la entidad Ubigeo y sus operaciones CRUD
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubigeo } from './ubigeo.entity';
import { UbigeoService } from './ubigeo.service';
import { UbigeoController } from './ubigeo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ubigeo])],
  providers: [UbigeoService],
  controllers: [UbigeoController],
  exports: [UbigeoService],
})
export class UbigeoModule {}
