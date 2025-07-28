import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Param, Put, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { AdminSecService } from './adminsec.service';
import { CreateAdminSecDto } from './dto/CreateAdminSecDto';
import { UpdateAdminSecDto } from './dto/UpdateAdminSecDto';

@Controller('adminsec')
@UseGuards(JwtAuthGuard)
export class AdminSecController {
  constructor(private readonly adminSecService: AdminSecService) {}

  @Get()
  list() {
    return this.adminSecService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.adminSecService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateAdminSecDto) {
    return this.adminSecService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAdminSecDto) {
    return this.adminSecService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.adminSecService.remove(id);
  }

  // Endpoint para filtrar por colegio
  @Get('colegio/:id_colegio')
  findByColegio(@Param('id_colegio') id_colegio: number) {
    return this.adminSecService.findByColegio(id_colegio);
  }
}
