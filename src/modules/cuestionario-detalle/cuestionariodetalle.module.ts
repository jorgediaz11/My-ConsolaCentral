import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuestionarioDetalleEntity } from './cuestionariodetalle.entity';
import { CuestionarioDetalleService } from './cuestionariodetalle.service';
import { CuestionarioDetalleController } from './cuestionariodetalle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CuestionarioDetalleEntity])],
  providers: [CuestionarioDetalleService],
  controllers: [CuestionarioDetalleController],
})
export class CuestionarioDetalleModule {}
