// 08 Validacion de datos y autenticación
// E26: Servicio para la lógica de autenticación
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from '../usuarios/usuarios.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
  ) {}

  async login(loginDto: { username: string; password: string }) {
    const { username, password } = loginDto;

    // Buscar usuario por username
    const user = await this.usuariosRepository.findOne({
      where: { username },
    });

    // Validar usuario y contraseña
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Crear payload para JWT
    const payload = {
      sub: user.id_usuario,
      username: user.username,
    };

    // Generar token
    const access_token = this.jwtService.sign(payload);

    // ✅ CAMBIO PRINCIPAL: Agregar datos de usuario a la respuesta
    return {
      access_token,
      user: {
        id_usuario: user.id_usuario,
        username: user.username,
        nombres: user.nombres,
        apellido: user.apellido,
        correo: user.correo,
        id_perfil: user.id_perfil,
        //id_colegio: user.id_colegio,
        estado: user.estado,
      },
    };
  }

  async signIn(username: string, password: string) {
    return this.login({ username, password });
  }
}
