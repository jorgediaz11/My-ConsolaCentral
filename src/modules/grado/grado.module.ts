import { Module } from '@nestjs/common';
import { GradoService } from './grado.service';
import { GradoController } from './grado.controller';

@Module({
  providers: [GradoService],
  controllers: [GradoController]
})
export class GradoModule {}
