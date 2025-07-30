import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seccion } from './seccion.entity';
import { SeccionService } from './seccion.service';
import { SeccionController } from './seccion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Seccion])],
  providers: [SeccionService],
  controllers: [SeccionController],
})
export class SeccionModule {}
