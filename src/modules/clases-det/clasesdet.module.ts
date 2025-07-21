import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClasesDet } from './clasesdet.entity';
import { ClasesDetService } from './clasesdet.service';
import { ClasesDetController } from './clasesdet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClasesDet])],
  providers: [ClasesDetService],
  controllers: [ClasesDetController],
  exports: [ClasesDetService],
})
export class ClasesDetModule {}
