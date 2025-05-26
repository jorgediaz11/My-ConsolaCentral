import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constans';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true, // Make the JwtModule globally available
      secret: jwtConstants.secret,  // Secret key for signing the JWT
      signOptions: { expiresIn: '60s' },  // Token expiration time
    }),
  ],
  controllers: [AuthController],  // Controller for handling authentication routes
  providers: [AuthService, JwtStrategy],  // Service for handling authentication logic
  exports: [AuthService], // Export AuthService for use in other modules
})
export class AuthModule {}  // AuthModule for handling authentication
