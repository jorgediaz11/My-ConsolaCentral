import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/CreateAreaDto';
import { UpdateAreaDto } from './dto/UpdateAreaDto';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Get()
  findAll() {
    return this.areaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.areaService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateAreaDto) {
    return this.areaService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAreaDto) {
    return this.areaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.areaService.remove(id);
  }
}
