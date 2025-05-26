// 02 Importa los módulos necesarios
// Importa y registra todos los módulos funcionales, incluyendo el módulo de autenticación.
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

const pgConfig = {
  type: 'postgres', // Indica que se usará PostgreSQL como base de datos.
  host: 'localhost',  // Dirección del servidor de la base de datos (localhost en este caso).
  port: 5432,   // Puerto del servidor de la base de datos (5432 es el puerto por defecto para PostgreSQL).
  username: 'postgress',  // Nombre de usuario para conectarse a la base de datos.
  password: 'root', // Contraseña para el usuario de la base de datos.
  database: 'root', // Nombre de la base de datos a la que se conectará.
  entities: [], // Aquí se pueden especificar las entidades (clases que representan tablas) que se usarán en la base de datos.
  synchronize: false, // Si es true, TypeORM sincroniza automáticamente el esquema de la base de datos con las entidades (útil en desarrollo).
};

const sqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite', // Indica que se usará SQLite como base de datos.
  database: 'db.sqlite', // Nombre del archivo de la base de datos SQLite (se crea en la raíz del proyecto si no existe).
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ruta donde TypeORM buscará las entidades (clases que representan tablas).
  synchronize: true, // Si es true, TypeORM sincroniza automáticamente el esquema de la base de datos con las entidades (útil en desarrollo).
  logging: true, // Habilita el registro (log) de las consultas SQL y otras operaciones de TypeORM en consola.
};

@Module({
  imports: [TypeOrmModule.forRoot(sqliteConfig), UsersModule, AuthModule],  // Importa el módulo de TypeORM y configura la conexión a la base de datos.
  controllers: [AppController], // Controladores de la aplicación.
  providers: [AppService],  // Servicios de la aplicación.
})
export class AppModule {
  constructor(private datasource: DataSource) {}  // Constructor que recibe una instancia de DataSource para manejar la conexión a la base de datos.
}
