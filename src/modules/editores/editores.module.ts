import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editor } from './editor.entity';
import { EditoresController } from './editores.controller';
import { EditoresService } from './editores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Editor])],
  controllers: [EditoresController],
  providers: [EditoresService],
  exports: [TypeOrmModule, EditoresService],
})
export class EditoresModule {}
