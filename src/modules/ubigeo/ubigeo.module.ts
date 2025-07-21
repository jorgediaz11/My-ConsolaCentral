import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubigeo } from './ubigeo.entity';
import { UbigeoService } from './ubigeo.service';
import { UbigeoController } from './ubigeo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ubigeo])],
  providers: [UbigeoService],
  controllers: [UbigeoController],
  exports: [UbigeoService],
})
export class UbigeoModule {}