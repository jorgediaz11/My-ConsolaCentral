// 08
// E26: Servicio para la lógica de autenticación
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, // Service for user-related operations
    private jwtService: JwtService, // Service for handling JWT operations
  ) {}

  // E27: Validar usuario y generar JWT
  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    // E28: Buscar usuario y validar contraseña
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const passwordMatcb = await bcrypt.compare(pass, user.password);

    if (!passwordMatcb) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };
    // E29: Generar y devolver token JWT
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async login(loginDto: { username: string; password: string }) {
    const user = await this.usersService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (!user) {
      throw new Error('Credenciales inválidas');
    }
    return {
      access_token: this.jwtService.sign({
        sub: user.id,
        username: user.username,
      }),
    };
  }
  // async login(loginDto: { username: string; password: string }) {
  //   // E36: Validar usuario y contraseña usando UsersService
  //   const user = await this.usersService.validateUser(
  //     loginDto.username,
  //     loginDto.password,
  //   );
  //   if (!user) {
  //     throw new Error('Credenciales inválidas');
  //   }
  //   // E37: Generar y devolver token JWT
  //   return {
  //     access_token: this.jwtService.sign({
  //       sub: user.id,
  //       username: user.username,
  //     }),
  //   };
  // }
}
