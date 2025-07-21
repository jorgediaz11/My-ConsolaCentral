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
import { UsersService } from './users.service';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { Param, Put, Delete } from '@nestjs/common';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {} // Constructor que recibe una instancia del servicio UsersService.

  // E13: Endpoint GET /users - Listar todos los usuarios
  @Get()
  list() {
    // E14: Llama al servicio para obtener todos los usuarios
    return this.userService.findAll();
  }

  // E15: Endpoint GET /users/:id - Obtener usuario por ID
  // E16: Llama al servicio para obtener un usuario específico

  // E17: Endpoint POST /users - Crear un nuevo usuario
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    // E18: Llama al servicio para crear un usuario
    return this.userService.create(createUserDto);
  }

  /* findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  } */

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.userService.remove(Number(id));
    return { message: 'Usuario eliminado correctamente' };
  }
}
