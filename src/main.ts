// 01 Inicio de la Aplicación
// Arranca la aplicación NestJS y carga el módulo raíz (AppModule).
// E01: Inicio de la aplicación NestJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // E02: Crear la instancia de la aplicación con el módulo raíz
  const app = await NestFactory.create(AppModule);

  // E03: Habilitar CORS para permitir peticiones externas
  app.enableCors(); // Habilita CORS para permitir solicitudes desde otros dominios.

  // E04: Iniciar el servidor en el puerto definido
  await app.listen(process.env.PORT ?? 3000); // Escucha en el puerto especificado por la variable de entorno PORT o en el puerto 3000 por defecto.
}
void bootstrap(); // E05: Llamada a la función bootstrap para iniciar la aplicación
