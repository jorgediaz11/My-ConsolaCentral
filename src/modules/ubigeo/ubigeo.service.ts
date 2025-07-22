import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Raw } from 'typeorm';
import { Ubigeo } from './ubigeo.entity';
import { CreateUbigeoDto } from './dto/CreateUbigeoDto';
import { UpdateUbigeoDto } from './dto/UpdateUbigeoDto';

@Injectable()
export class UbigeoService {
  constructor(
    @InjectRepository(Ubigeo)
    private ubigeoRepository: Repository<Ubigeo>,
  ) {}

  async findDepartamentos() {
    return this.ubigeoRepository.find({
      where: { tipo: 'A' },
      order: { departamento: 'ASC' },
      select: ['id_ubigeo', 'departamento'],
    });
  }

  async findProvincias(cod_dep: string) {
    // Validar que cod_dep tenga al menos 2 caracteres
    const depCode = cod_dep.substring(0, 2);
    return this.ubigeoRepository.find({
      where: {
        tipo: 'B',
        id_ubigeo: Raw((alias) => `LEFT(${alias}, 2) = :dep`, { dep: depCode }),
      },
      order: { provincia: 'ASC' },
      select: ['id_ubigeo', 'provincia'],
    });
  }

  async findDistritos(cod_prov: string) {
    // Validar que cod_prov tenga al menos 4 caracteres
    const provCode = cod_prov.substring(0, 4);
    return this.ubigeoRepository.find({
      where: {
        tipo: 'C',
        id_ubigeo: Raw((alias) => `LEFT(${alias}, 4) = :prov`, {
          prov: provCode,
        }),
      },
      order: { distrito: 'ASC' },
      select: ['id_ubigeo', 'distrito'],
    });
  }

  async create(dto: CreateUbigeoDto): Promise<Ubigeo> {
    const ubigeo = this.ubigeoRepository.create(dto);
    return await this.ubigeoRepository.save(ubigeo);
  }

  async update(
    id_ubigeo: string,
    dto: UpdateUbigeoDto,
  ): Promise<Ubigeo | null> {
    await this.ubigeoRepository.update(id_ubigeo, dto);
    return this.ubigeoRepository.findOneBy({ id_ubigeo });
  }

  async remove(id_ubigeo: string): Promise<void> {
    await this.ubigeoRepository.delete(id_ubigeo);
  }
}
