// 02 Importa los módulos necesarios
// Importa y registra todos los módulos funcionales, incluyendo el módulo de autenticación.
// E05: Importar y registrar los módulos principales de la aplicación
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ColegiosModule } from './modules/colegios/colegios.module';
import { DocentesModule } from './modules/docentes/docentes.module';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { EditoresModule } from './modules/editores/editores.module';

@Module({
  imports: [
    // E06: Configuración global de variables de entorno
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    ColegiosModule,
    DocentesModule,
    EstudiantesModule,
    EditoresModule,
    // E07: Configuración asíncrona de TypeORM para la base de datos
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isSsl = config.get<string>('DB_SSL') === 'true';

        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: parseInt(config.get<string>('DB_PORT', '5432')),
          username: config.get<string>('DB_USERNAME'), // Nombre de usuario de la base de datos.
          password: config.get<string>('DB_PASSWORD'), // Contraseña de la base de datos.
          database: config.get<string>('DB_NAME'), // Nombre de la base de datos.
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false, // ⚠️ solo en dev o staging
          logging: true,
          ssl: isSsl,
          extra: {
            ssl: isSsl
              ? {
                  rejectUnauthorized: false,
                }
              : null,
          },
        };
      },
    }),
    UsersModule,
    AuthModule,
  ],
  // E08: Registro del controlador raíz
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource) {} // Constructor que recibe una instancia de DataSource para manejar la conexión a la base de datos.
}
