import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from './material.entity';
import { CreateMaterialDto } from './dto/CreateMaterialDto';
import { UpdateMaterialDto } from './dto/UpdateMaterialDto';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(Material)
    private repo: Repository<Material>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id_material: number) {
    return this.repo.findOne({ where: { id: id_material } });
  }

  create(dto: CreateMaterialDto) {
    const obj = this.repo.create(dto);
    return this.repo.save(obj);
  }

  async update(id_material: number, dto: UpdateMaterialDto) {
    await this.repo.update(id_material, dto);
    return this.findOne(id_material);
  }

  remove(id_material: number) {
    return this.repo.delete(id_material);
  }
}
