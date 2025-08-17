import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialLeccion } from './material-lecciones.entity';
import { MaterialLeccionService } from './material-lecciones.service';
import { MaterialLeccionController } from './material-lecciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MaterialLeccion])],
  providers: [MaterialLeccionService],
  controllers: [MaterialLeccionController],
})
export class MaterialLeccionModule {}
