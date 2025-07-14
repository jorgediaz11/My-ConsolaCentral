import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nivel } from './nivel.entity';
import { NivelService } from './nivel.service';
import { NivelController } from './nivel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Nivel])],
  providers: [NivelService],
  controllers: [NivelController],
  exports: [NivelService],
})
export class NivelModule {}