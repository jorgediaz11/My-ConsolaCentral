// 04 Recepción de la Petición HTTP
// Recibe las peticiones HTTP relacionadas a usuarios.
import { Controller, Get, HttpStatus, Injectable, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}  // Constructor que recibe una instancia del servicio UsersService.

  @UseGuards(JwtAuthGuard)  // Protege la ruta con el guardia de autenticación JWT
  @Get()  // Define la ruta GET /users
  list() {
    return this.userService.findAll();  // Llama al servicio para obtener todos los usuarios
    // console.debug(users.length)
    // return res.status(HttpStatus.OK).json(users);
  }

  /* findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  } */

}
