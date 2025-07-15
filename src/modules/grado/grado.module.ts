import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grado } from './grado.entity';
import { GradoService } from './grado.service';
import { GradoController } from './grado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Grado])],
  providers: [GradoService],
  controllers: [GradoController],
  exports: [GradoService],
})
export class GradoModule {}
