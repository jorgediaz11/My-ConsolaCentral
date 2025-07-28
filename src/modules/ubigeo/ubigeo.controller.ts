import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UbigeoService } from './ubigeo.service';
import { CreateUbigeoDto } from './dto/CreateUbigeoDto';
import { UpdateUbigeoDto } from './dto/UpdateUbigeoDto';

@Controller('ubigeo')
export class UbigeoController {
  constructor(private readonly ubigeoService: UbigeoService) {}

  @Get('departamentos')
  findDepartamentos() {
    return this.ubigeoService.findDepartamentos();
  }

  @Get('provincias/:cod_dep')
  findProvincias(@Param('cod_dep') cod_dep: string) {
    return this.ubigeoService.findProvincias(cod_dep);
  }

  @Get('distritos/:cod_prov')
  findDistritos(@Param('cod_prov') cod_prov: string) {
    return this.ubigeoService.findDistritos(cod_prov);
  }

  @Post() // Endpoint to create a new ubigeo
  create(@Body() dto: CreateUbigeoDto) {
    return this.ubigeoService.create(dto);
  }

  @Put(':ubigeo')
  update(@Param('id_ubigeo') ubigeo: string, @Body() dto: UpdateUbigeoDto) {
    return this.ubigeoService.update(ubigeo, dto);
  }

  @Delete(':ubigeo')
  remove(@Param('id_ubigeo') ubigeo: string) {
    return this.ubigeoService.remove(ubigeo);
  }
}
