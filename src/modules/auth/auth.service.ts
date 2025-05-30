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

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);

    if(!user){
      throw new UnauthorizedException('User not found');
    }

    const passwordMatcb = await bcrypt.compare(pass, user.password);

    if (!passwordMatcb) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;

    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
