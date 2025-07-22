// 05 Importa los módulos necesarios
// Importa los módulos de NestJS necesarios para crear un controlador y manejar solicitudes HTTP.
// Importa el servicio UsersService para manejar la lógica de negocio relacionada con los usuarios.
// Importa el guardia JwtAuthGuard para proteger las rutas del controlador.
// Importa el DTO CreateUserDto para definir la estructura de los datos necesarios para crear un usuario.
// Importa la clase Response de Express para manejar las respuestas HTTP.
// Importa los decoradores necesarios de NestJS para definir el controlador y sus rutas.

// E12: Controlador para gestionar endpoints relacionados con usuarios
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUsuariosDto } from './dto/CreateUsuariosDto';
import { UpdateUsuariosDto } from './dto/UpdateUsuariosDto';
import { Param, Put, Delete } from '@nestjs/common';

@Controller('usuarios')
@UseGuards(JwtAuthGuard)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {} // Constructor que recibe una instancia del servicio UsuariosService.

  // E13: Endpoint GET /usuarios - Listar todos los usuarios
  @Get()
  list() {
    // E14: Llama al servicio para obtener todos los usuarios
    return this.usuariosService.findAll();
  }

  // E15: Endpoint GET /users/:id - Obtener usuario por ID
  // E16: Llama al servicio para obtener un usuario específico

  // E17: Endpoint POST /users - Crear un nuevo usuario
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUsuariosDto: CreateUsuariosDto) {
    // E18: Llama al servicio para crear un usuario
    return this.usuariosService.create(createUsuariosDto);
  }

  @Get(':id_usuario')
  async findOne(@Param('id_usuario') id: number) {
    return this.usuariosService.findOne(Number(id));
  }

  @Put(':id_usuario')
  async update(
    @Param('id_usuario') id_usuario: number,
    @Body() updateUsuariosDto: UpdateUsuariosDto,
  ) {
    return await this.usuariosService.update(
      Number(id_usuario),
      updateUsuariosDto,
    );
  }

  @Delete(':id_usuario')
  async remove(@Param('id_usuario') id_usuario: number) {
    await this.usuariosService.remove(Number(id_usuario));
    return { message: 'Usuario eliminado correctamente' };
  }
}
