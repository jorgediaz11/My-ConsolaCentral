import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colegio } from './colegio.entity';
import { ColegiosService } from './colegios.service';
import { ColegiosController } from './colegios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Colegio])], // Importa la entidad Colegio.
  controllers: [ColegiosController], // Registra el controlador ColegiosController.
  providers: [ColegiosService], // Registra el servicio ColegiosService.
  exports: [TypeOrmModule, ColegiosService], // Exporta para uso en otros módulos.
})
export class ColegiosModule {}
