// 03 Carga de módulos
// Registra el controlador y servicio de usuarios,
// importa la entidad User y ejecuta la creación
// del SuperAdmin en el arranque.
import { Module } from '@nestjs/common';
import { Usuarios } from './usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios])], // Importa el módulo TypeOrmModule y registra la entidad User.
  exports: [TypeOrmModule, UsuariosService], // Exporta el módulo TypeOrmModule y el servicio UsersService para que puedan ser utilizados en otros módulos.
  controllers: [UsuariosController], // Registra el controlador UsersController.
  providers: [UsuariosService], // Registra el servicio UsuariosService.
})
export class UsuariosModule {
  constructor(private readonly usuariosService: UsuariosService) {} //  Constructor que recibe una instancia del servicio UsuariosService.

  async onApplicationBootstrap() {
    await this.usuariosService.createSuperAdmin(); // Crea un superadministrador al iniciar la aplicación.
  }
}
