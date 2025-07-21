import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Familia } from './familia.entity';
import { FamiliaService } from './familia.service';
import { FamiliaController } from './familia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Familia])],
  providers: [FamiliaService],
  controllers: [FamiliaController],
  exports: [FamiliaService],
})
export class FamiliaModule {}
