// 01 Inicio de la Aplicación
// Arranca la aplicación NestJS y carga el módulo raíz (AppModule).
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();