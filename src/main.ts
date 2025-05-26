// 01 Inicio de la Aplicación
// Arranca la aplicación NestJS y carga el módulo raíz (AppModule).
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // Crea una instancia de la aplicación NestJS.
  await app.listen(process.env.PORT ?? 3000); // Escucha en el puerto especificado por la variable de entorno PORT o en el 3000 por defecto.
}
bootstrap();