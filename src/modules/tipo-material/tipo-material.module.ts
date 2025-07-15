import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMaterial } from './tipo-material.entity';
import { TipoMaterialService } from './tipo-material.service';
import { TipoMaterialController } from './tipo-material.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoMaterial])],
  providers: [TipoMaterialService],
  controllers: [TipoMaterialController],
  exports: [TipoMaterialService],
})
export class TipoMaterialModule {}
