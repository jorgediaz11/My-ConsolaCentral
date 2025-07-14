import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { GradoService } from './grado.service';
import { CreateGradoDto } from './dto/CreateGradoDto';
import { UpdateGradoDto } from './dto/UpdateGradoDto';

@Controller('grado')
export class GradoController {
  constructor(private readonly gradoService: GradoService) {}

  @Get()
  findAll() {
    return this.gradoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gradoService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateGradoDto) {
    return this.gradoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateGradoDto) {
    return this.gradoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gradoService.remove(id);
  }
}
