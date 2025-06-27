import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EditoresService } from './editores.service';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { CreateEditorDto } from './dto/CreateEditorDto';
import { Param, Put, Delete } from '@nestjs/common';
import { UpdateEditorDto } from './dto/UpdateEditorDto';

@Controller('editores')
@UseGuards(JwtAuthGuard)
export class EditoresController {
  constructor(private readonly editoresService: EditoresService) {}

  @Get()
  list() {
    return this.editoresService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEditorDto: CreateEditorDto) {
    return this.editoresService.create(createEditorDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.editoresService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEditorDto: UpdateEditorDto,
  ) {
    return this.editoresService.update(Number(id), updateEditorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.editoresService.remove(Number(id));
    return { message: 'Editor eliminado correctamente' };
  }
}
