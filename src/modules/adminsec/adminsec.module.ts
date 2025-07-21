import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminSec } from './adminsec.entity';
import { AdminSecService } from './adminsec.service';
import { AdminSecController } from './adminsec.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdminSec])],
  providers: [AdminSecService],
  controllers: [AdminSecController],
  exports: [AdminSecService],
})
export class AdminSecModule {}
