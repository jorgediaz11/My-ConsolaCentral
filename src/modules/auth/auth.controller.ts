import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController { 
  constructor(private authService: AuthService) {}  // Constructor injection of AuthService

  @HttpCode(HttpStatus.OK)
  @Post('signin') // Endpoint for signing in
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password); // Call to signIn method of AuthService
  }
}
