import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';
import { CreateRolDto } from './dto/CreateRolDto';
import { UpdateRolDto } from './dto/UpdateRolDto';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private repo: Repository<Rol>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  create(dto: CreateRolDto) {
    const obj = this.repo.create(dto);
    return this.repo.save(obj);
  }

  async update(id: number, dto: UpdateRolDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
