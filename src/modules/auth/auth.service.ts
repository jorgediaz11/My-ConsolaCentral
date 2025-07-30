import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from '../usuarios/usuarios.entity';
import { RefreshToken } from './refresh-token.entity';
import { AlumnoGrado } from '../alumnogrado/alumnogrado.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
    @InjectRepository(RefreshToken)
    private refreshTokenRepository: Repository<RefreshToken>,
    @InjectRepository(AlumnoGrado)
    private alumnoGradoRepository: Repository<AlumnoGrado>,
  ) {}

  async login(loginDto: { username: string; password: string }): Promise<{
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
    const { username, password } = loginDto;
    const user = await this.usuariosRepository.findOne({ where: { username } });
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    let id_grado: number | undefined = undefined;
    if (user.id_perfil === 4) {
      const alumnoGrado = await this.alumnoGradoRepository.findOne({
        where: {
          id_usuario: user.id_usuario,
          estado: true,
          anio_escolar: 2025,
        },
      });
      if (alumnoGrado && alumnoGrado.id_grado) {
        id_grado = alumnoGrado.id_grado;
      }
    }

    const payload = { sub: user.id_usuario, username: user.username };
    const access_token = this.jwtService.sign(payload);
    const refresh_token = this.jwtService.sign(
      { username: user.username },
      { expiresIn: '7d' },
    );

    await this.refreshTokenRepository.save({
      username: user.username,
      token: refresh_token,
    });

    return {
      access_token,
      refresh_token,
      user: {
        id_usuario: user.id_usuario,
        username: user.username,
        nombres: user.nombres,
        apellido: user.apellido,
        correo: user.correo,
        id_perfil: user.id_perfil,
        estado: user.estado,
        id_grado: user.id_perfil === 4 ? id_grado : undefined,
      },
    };
  }

  async signIn(
    username: string,
    password: string,
  ): Promise<{
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
    return this.login({ username, password });
  }

  async forgotPassword(correo: string): Promise<{ message: string }> {
    const usuario = await this.usuariosRepository.findOne({
      where: { correo },
    });
    // No reveles si el correo existe por seguridad
    if (!usuario) {
      return {
        message: 'Correo de recuperación enviado si el usuario existe.',
      };
    }

    // Aquí deberías generar y enviar el token de recuperación
    // const resetToken = this.jwtService.sign(
    //   { sub: usuario.id_usuario, correo: usuario.correo },
    //   { expiresIn: '1h' },
    // );
    // await this.emailService.sendResetPassword(usuario.correo, resetToken);

    return { message: 'Correo de recuperación enviado si el usuario existe.' };
  }

  async resetPassword(
    token: string,
    nuevaPassword: string,
  ): Promise<{ message: string }> {
    try {
      const payload: {
        sub: number;
        correo: string;
      } = this.jwtService.verify(token);
      const usuario = await this.usuariosRepository.findOne({
        where: { id_usuario: payload.sub, correo: payload.correo },
      });
      if (!usuario) throw new UnauthorizedException('Usuario no encontrado');

      usuario.password = nuevaPassword;
      await this.usuariosRepository.save(usuario);

      return { message: 'Contraseña restablecida correctamente.' };
    } catch {
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }

  async changePassword(
    username: string,
    actualPassword: string,
    nuevaPassword: string,
  ): Promise<{ message: string }> {
    const usuario = await this.usuariosRepository.findOne({
      where: { username },
    });
    if (!usuario) throw new UnauthorizedException('Usuario no encontrado');
    if (usuario.password !== actualPassword)
      throw new UnauthorizedException('Contraseña actual incorrecta');
    usuario.password = nuevaPassword;
    await this.usuariosRepository.save(usuario);
    return { message: 'Contraseña cambiada correctamente.' };
  }

  async logout(username: string): Promise<{ message: string }> {
    await this.refreshTokenRepository.delete({ username });
    return { message: 'Sesión cerrada correctamente.' };
  }
}
