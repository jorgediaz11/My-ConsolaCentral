// 07 This file defines the AuthController for handling authentication requests in a NestJS application.
// It imports necessary modules and services, defines the controller, and implements a sign-in endpoint.
// src/modules/auth/auth.controller.ts

// E23: Controlador para endpoints de autenticación
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {} // Constructor injection of AuthService

  // E24: Endpoint POST /auth/login - Autenticación de usuario
  @HttpCode(HttpStatus.OK)
  @Post('signin') // Endpoint for signing in
  signIn(@Body() signInDto: Record<string, any>) {
    const username: string = String(signInDto.username);
    const password: string = String(signInDto.password);
    // E25: Llama al servicio de autenticación para validar usuario y generar token
    return this.authService.signIn(username, password); // Call to signIn method of AuthService
  }

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    return this.authService.login(loginDto);
  }
  // login(@Body() loginDto: { username: string; password: string }) {
  //   // lógica de login
  //   const { username } = loginDto;
  //   // Aquí puedes agregar la lógica de autenticación usando username y password
  //   return { message: `Usuario ${username} intentando iniciar sesión.` };
  // }
}
