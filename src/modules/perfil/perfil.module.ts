import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfil } from './perfil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Perfil])],
  controllers: [PerfilController],
  providers: [PerfilService],
  exports: [PerfilService],
})
export class PerfilModule {}
