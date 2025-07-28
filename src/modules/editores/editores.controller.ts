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
import { EditoresService } from './editores.service';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { CreateEditorDto } from './dto/CreateEditorDto';
import { UpdateEditorDto } from './dto/UpdateEditorDto';

@Controller('editores')
@UseGuards(JwtAuthGuard)
export class EditoresController {
  constructor(private readonly editoresService: EditoresService) {}

  @Get()
  list() {
    return this.editoresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.editoresService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateEditorDto) {
    return this.editoresService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateEditorDto) {
    return this.editoresService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.editoresService.remove(Number(id));
    return { message: 'Editor eliminado correctamente' };
  }

  @Get('colegio/:id_colegio')
  findByColegio(@Param('id_colegio') id_colegio: number) {
    return this.editoresService.findByColegio(id_colegio);
  }
}
