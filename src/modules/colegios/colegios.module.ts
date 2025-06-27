import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colegio } from '../../models/colegio.entity';
import { ColegiosController } from './colegios.controller';
import { ColegiosService } from './colegios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Colegio])], // Importa la entidad Colegio.
  controllers: [ColegiosController], // Registra el controlador ColegiosController.
  providers: [ColegiosService], // Registra el servicio ColegiosService.
  exports: [TypeOrmModule, ColegiosService], // Exporta para uso en otros módulos.
})
export class ColegiosModule {}
