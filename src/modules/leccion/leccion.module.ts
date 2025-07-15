import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leccion } from './leccion.entity';
import { LeccionService } from './leccion.service';
import { LeccionController } from './leccion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Leccion])],
  providers: [LeccionService],
  controllers: [LeccionController],
  exports: [LeccionService],
})
export class LeccionModule {}
