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

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.librosService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateLibrosDto) {
    return this.librosService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateLibrosDto) {
    return this.librosService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.librosService.remove(id);
  }
}