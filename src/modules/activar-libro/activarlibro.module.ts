import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivarLibro } from './activarlibro.entity';
import { ActivarLibroService } from './activarlibro.service';
import { ActivarLibroController } from './activarlibro.controller';
// Agrega el import de Usuario y Libro
import { Usuarios } from '../usuarios/usuarios.entity';
import { Libro } from '../libro/libros.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ActivarLibro,
      Usuarios, // <-- Agrega esta línea
      Libro, // <-- Agrega esta línea
    ]),
  ],
  providers: [ActivarLibroService],
  controllers: [ActivarLibroController],
  exports: [ActivarLibroService],
})
export class ActivarLibroModule {}
