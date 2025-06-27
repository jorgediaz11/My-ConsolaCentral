// 03 Carga de módulos
// Registra el controlador y servicio de usuarios,
// importa la entidad User y ejecuta la creación
// del SuperAdmin en el arranque.
import { Module } from '@nestjs/common';
import { User } from '../../models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa el módulo TypeOrmModule y registra la entidad User.
  exports: [TypeOrmModule, UsersService], // Exporta el módulo TypeOrmModule y el servicio UsersService para que puedan ser utilizados en otros módulos.
  controllers: [UsersController], // Registra el controlador UsersController.
  providers: [UsersService], // Registra el servicio UsersService.
})
export class UsersModule {
  constructor(private readonly usersService: UsersService) {} //  Constructor que recibe una instancia del servicio UsersService.

  async onApplicationBootstrap() {
    await this.usersService.createSuperAdmin(); // Crea un superadministrador al iniciar la aplicación.
  }
}
