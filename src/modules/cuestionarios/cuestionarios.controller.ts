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
import { CuestionariosService } from './cuestionarios.service';
import { CreateCuestionarioDto } from './dto/CreateCuestionarioDto';
import { UpdateCuestionarioDto } from './dto/UpdateCuestionarioDto';

@Controller('cuestionarios')
export class CuestionariosController {
  constructor(private readonly cuestionariosService: CuestionariosService) {}

  @Get()
  findAll() {
    return this.cuestionariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cuestionariosService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCuestionarioDto) {
    return this.cuestionariosService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateCuestionarioDto) {
    return this.cuestionariosService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cuestionariosService.remove(Number(id));
  }
}
