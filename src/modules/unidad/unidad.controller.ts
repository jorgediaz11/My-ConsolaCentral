import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UnidadService } from './unidad.service';
import { CreateUnidadDto } from './dto/CreateUnidadDto';
import { UpdateUnidadDto } from './dto/UpdateUnidadDto';

@Controller('unidad')
export class UnidadController {
  constructor(private readonly unidadService: UnidadService) {}

  @Get()
  findAll() {
    return this.unidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.unidadService.findOne(id);
  }

  @Get('curso/:id_curso')
  findByCurso(@Param('id_curso') id_curso: number) {
    return this.unidadService.findByCurso(Number(id_curso));
  }

  @Post()
  create(@Body() dto: CreateUnidadDto) {
    return this.unidadService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateUnidadDto) {
    return this.unidadService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.unidadService.remove(id);
  }
}
