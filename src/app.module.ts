// 02 Importa los módulos necesarios
// Importa y registra todos los módulos funcionales, incluyendo el módulo de autenticación.
// E05: Importar y registrar los módulos principales de la aplicación

// Importación de módulos y dependencias principales
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

// Importación de controladores y servicios raíz
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Importación de módulos funcionales (orden alfabético recomendado)
import { AuthModule } from './modules/auth/auth.module';
import { AreaModule } from './modules/area/area.module';
import { ColegiosModule } from './modules/colegios/colegios.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { DocentesModule } from './modules/docentes/docentes.module';
import { EditoresModule } from './modules/editores/editores.module';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { GradoModule } from './modules/grado/grado.module';
import { LeccionModule } from './modules/leccion/leccion.module';
import { MaterialModule } from './modules/material/material.module';
import { NivelModule } from './modules/nivel/nivel.module';
// Correct the import path if the folder is named 'roles' instead of 'rol'
import { PerfilModule } from './modules/perfil/perfil.module';
import { TipoMaterialModule } from './modules/tipo-material/tipo-material.module';
import { UnidadModule } from './modules/unidad/unidad.module';
import { UsersModule } from './modules/users/users.module';
// ...nuevos imports
import { ClasesColModule } from './modules/clases-col/clasescol.module';
import { ClasesDetModule } from './modules/clases-det/clasesdet.module';
import { FamiliaModule } from './modules/familia/familia.module';
import { AdminSecModule } from './modules/adminsec/adminsec.module';
import { UbigeoModule } from './modules/ubigeo/ubigeo.module';
import { ActivarLibroModule } from './modules/activar-libro/activarlibro.module';

@Module({
  imports: [
    // Configuración global de variables de entorno
    ConfigModule.forRoot({ isGlobal: true }),

    // Configuración de TypeORM para la base de datos
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isSsl = config.get<string>('DB_SSL') === 'true';
        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: parseInt(config.get<string>('DB_PORT', '5432')),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_NAME'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
          logging: true,
          ssl: isSsl,
          extra: {
            ssl: isSsl ? { rejectUnauthorized: false } : null,
          },
        };
      },
    }),

    // Módulos funcionales (ordenados alfabéticamente)
    AreaModule,
    AuthModule,
    ColegiosModule,
    CursosModule,
    DocentesModule,
    EditoresModule,
    EstudiantesModule,
    GradoModule,
    LeccionModule,
    MaterialModule,
    NivelModule,
    TipoMaterialModule,
    UnidadModule,
    UsersModule,
    PerfilModule,
    ClasesColModule,
    ClasesDetModule,
    FamiliaModule,
    AdminSecModule,
    UbigeoModule,
    ActivarLibroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}
