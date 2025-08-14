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
import { PeriodoAcademicoModule } from './modules/periodoacademico/periodoacademico.module';
import { TipoPreguntaModule } from './modules/tipo-pregunta/tipo-pregunta.module';
import { AuthModule } from './modules/auth/auth.module';
import { AreaModule } from './modules/area/area.module';
import { ColegiosModule } from './modules/colegios/colegios.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { DocentesModule } from './modules/docentes/docentes.module';
import { EditoresModule } from './modules/editores/editores.module';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { GradoModule } from './modules/grado/grado.module';
import { LeccionModule } from './modules/leccion/leccion.module';
import { TipoMaterialModule } from './modules/tipo-material/tipo-material.module';
import { TipoActividadModule } from './modules/tipo-actividad/tipo-actividad.module';
import { MaterialModule } from './modules/material/material.module';
import { NivelModule } from './modules/nivel/nivel.module';
// Correct the import path if the folder is named 'roles' instead of 'rol'
import { PerfilModule } from './modules/perfil/perfil.module';
import { UnidadModule } from './modules/unidad/unidad.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
// ...nuevos imports
import { ClasesColModule } from './modules/clases-col/clasescol.module';
import { ClasesDetModule } from './modules/clases-det/clasesdet.module';
import { FamiliaModule } from './modules/familia/familia.module';
import { AdminSecModule } from './modules/adminsec/adminsec.module';
import { UbigeoModule } from './modules/ubigeo/ubigeo.module';
import { ActivarLibroModule } from './modules/activar-libro/activarlibro.module';
import { LibrosModule } from './modules/libro/libros.module';
import { SeccionModule } from './modules/seccion/seccion.module';
import { AulasModule } from './modules/aulas/aulas.module';
import { CuestionariosModule } from './modules/cuestionarios/cuestionarios.module';
import { PreguntasModule } from './modules/preguntas/preguntas.module';
import { OpcionesModule } from './modules/opciones/opciones.module';
import { RespuestaEstudianteModule } from './modules/respuestas/respuestas.module';
import { EvaluacionCuestionarioModule } from './modules/evaluacionescuestionario/evaluacionescuestionario.module';
import { ActividadesModule } from './modules/actividades/actividades.module';
import { EntregasModule } from './modules/entregas/entregas.module';
import { EvaluacionActividadModule } from './modules/evaluacionesactividad/evaluacionesactividad.module';
import { CursoDetalleModule } from './modules/curso-detalle/cursosdetalles.module';

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
  TipoActividadModule,
  TipoPreguntaModule,
  PeriodoAcademicoModule,
    UnidadModule,
    UsuariosModule,
    PerfilModule,
    ClasesColModule,
    ClasesDetModule,
    FamiliaModule,
    AdminSecModule,
    UbigeoModule,
    ActivarLibroModule,
    LibrosModule,
    SeccionModule,
    AulasModule,
    CuestionariosModule,
    PreguntasModule,
    OpcionesModule,
    RespuestaEstudianteModule,
    EvaluacionCuestionarioModule,
    EvaluacionActividadModule,
    ActivarLibroModule,
    EntregasModule,
    ActivarLibroModule,
    ActividadesModule,
    CursoDetalleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}
