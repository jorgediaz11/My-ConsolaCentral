import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadEducativa } from './actividades.entity';
import { ActividadesService } from './actividades.service';
import { ActividadesController } from './actividades.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActividadEducativa])],
  providers: [ActividadesService],
  controllers: [ActividadesController],
})
export class ActividadesModule {}
