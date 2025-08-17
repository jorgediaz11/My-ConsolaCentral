import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaterialLeccion } from './material-lecciones.entity';
import { CreateMaterialLeccionDto } from './dto/CreateMaterial-LeccionDto';
import { UpdateMaterialLeccionDto } from './dto/UpdateMaterial-LeccionDto';

@Injectable()
export class MaterialLeccionService {
  constructor(
    @InjectRepository(MaterialLeccion)
    private materialLeccionRepository: Repository<MaterialLeccion>,
  ) {}

  findAll(): Promise<MaterialLeccion[]> {
    return this.materialLeccionRepository.find();
  }

  findOne(id: number): Promise<MaterialLeccion | null> {
    return this.materialLeccionRepository.findOneBy({
      id_material_leccion: id,
    });
  }

  async create(dto: CreateMaterialLeccionDto): Promise<MaterialLeccion> {
    const materialLeccion = this.materialLeccionRepository.create(dto);
    return await this.materialLeccionRepository.save(materialLeccion);
  }

  async update(
    id: number,
    dto: UpdateMaterialLeccionDto,
  ): Promise<MaterialLeccion | null> {
    await this.materialLeccionRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.materialLeccionRepository.delete(id);
  }
}
