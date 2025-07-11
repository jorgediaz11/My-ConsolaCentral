// 07 This file defines the AuthController for handling authentication requests in a NestJS application.
// It imports necessary modules and services, defines the controller, and implements a sign-in endpoint.
// E23: Controlador para endpoints de autenticación
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.username, loginDto.password);
  }
}
