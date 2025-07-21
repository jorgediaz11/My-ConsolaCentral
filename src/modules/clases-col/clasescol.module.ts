import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClasesCol } from './clasescol.entity';
import { ClasesColService } from './clasescol.service';
import { ClasesColController } from './clasescol.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClasesCol])],
  providers: [ClasesColService],
  controllers: [ClasesColController],
  exports: [ClasesColService],
})
export class ClasesColModule {}
