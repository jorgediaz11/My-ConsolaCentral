// src/app.controller.ts
// Este archivo define el controlador raíz de la aplicación NestJS.
// Importa el servicio de la aplicación y define un endpoint GET para devolver información sobre la aplicación.
// E12: Controlador raíz para el endpoint GET /
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Controller decorator to define a controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  about(): object {
    return this.appService.about(); // E12: Endpoint GET / that returns application metadata
  }
}
