import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuestionario } from './cuestionarios.entity';
import { CuestionariosService } from './cuestionarios.service';
import { CuestionariosController } from './cuestionarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cuestionario])],
  providers: [CuestionariosService],
  controllers: [CuestionariosController],
})
export class CuestionariosModule {}
