import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibrosDto } from './dto/CreateLibrosDto';
import { UpdateLibrosDto } from './dto/UpdateLibrosDto';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Get()
  findAll() {
    return this.librosService.findAll();
  }

  @Get(':id_libro')
  findOne(@Param('id_libro') id_libro: number) {
    return this.librosService.findOne(id_libro);
  }

  @Post()
  create(@Body() dto: CreateLibrosDto) {
    return this.librosService.create(dto);
  }

  @Put(':id_libro')
  update(@Param('id_libro') id_libro: number, @Body() dto: UpdateLibrosDto) {
    return this.librosService.update(id_libro, dto);
  }

  @Delete(':id_libro')
  remove(@Param('id_libro') id_libro: number) {
    return this.librosService.remove(id_libro);
  }
}
