import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TipoAccesoService } from './tipo-acceso.service';
import { CreateTipoAccesoDto } from './dto/CreateTipo-AccesoDto';
import { UpdateTipoAccesoDto } from './dto/UpdateTipo-AccesoDto';

@Controller('tipo-acceso')
export class TipoAccesoController {
  constructor(private readonly tipoAccesoService: TipoAccesoService) {}

  @Get('test')
  test() {
    return 'OK';
  }

  @Get()
  findAll() {
    return this.tipoAccesoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoAccesoService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateTipoAccesoDto) {
    return this.tipoAccesoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTipoAccesoDto) {
    return this.tipoAccesoService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoAccesoService.remove(Number(id));
  }
}
