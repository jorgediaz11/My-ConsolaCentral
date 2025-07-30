// 07 This file defines the AuthController for handling authentication requests in a NestJS application.
// It imports necessary modules and services, defines the controller, and implements a sign-in endpoint.
// E23: Controlador para endpoints de autenticación
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service'; // 07 Import the AuthService for handling authentication logic
import { LoginDto } from './dto/login.dto'; // DTO for login data
import { JwtAuthGuard } from './jwt-auth.guard';

interface AuthenticatedRequest extends Request {
  user: {
    id_usuario: number;
    username: string;
    // add other properties if needed
  };
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<{
    access_token: string;
    refresh_token: string;
    user: {
      id_usuario: number;
      username: string;
      nombres: string;
      apellido: string;
      correo: string;
      id_perfil: number;
      estado: boolean;
      id_grado?: number;
    };
  }> {
    return await this.authService.login(loginDto);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.username, loginDto.password);
  }

  // 02. Recuperar/Restablecer contraseña - Solicitar recuperación
  @Post('forgot-password')
  async forgotPassword(@Body('correo') correo: string) {
    return this.authService.forgotPassword(correo);
  }

  // 04. Cambio de contraseña (usuario autenticado)
  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  async changePassword(
    @Req() req: AuthenticatedRequest,
    @Body() body: { actualPassword: string; nuevaPassword: string },
  ): Promise<{ message: string }> {
    if (!req.user || !req.user.id_usuario) {
      throw new BadRequestException('Usuario no autenticado');
    }
    return await this.authService.changePassword(
      req.user.username,
      body.actualPassword,
      body.nuevaPassword,
    );
  }

  // 06. Logout
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(): Promise<{ message: string }> {
    // Lógica de logout
    return Promise.resolve({ message: 'Sesión cerrada correctamente.' });
  }
}
