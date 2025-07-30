import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoGrado } from './alumnogrado.entity';
import { AlumnoGradoService } from './alumnogrado.service';
import { AlumnoGradoController } from './alumnogrado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AlumnoGrado])],
  providers: [AlumnoGradoService],
  controllers: [AlumnoGradoController],
  exports: [AlumnoGradoService],
})
export class AlumnoGradoModule {}
