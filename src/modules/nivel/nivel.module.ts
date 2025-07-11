import { Module } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { NivelController } from './nivel.controller';

@Module({
  providers: [NivelService],
  controllers: [NivelController]
})
export class NivelModule {}
