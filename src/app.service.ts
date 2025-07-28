// 04 Servicio de la Aplicación
// Este archivo define la clase AppService que proporciona información sobre la aplicación.
// Está marcado como inyectable, lo que permite que se use como un proveedor en la NestJS application.
// El método `about` devuelve un objeto que contiene metadatos sobre la aplicación,
// como su nombre, descripción, versión y autor. Este servicio se puede inyectar en controladores u otros servicios
// para proporcionar esta información cuando sea necesario.

// E09: Definición del controlador raíz para el endpoint GET /
import { Injectable } from '@nestjs/common';

@Injectable() // Injectable decorator to mark this class as a provider
export class AppService {
  // E10: Método que responde a GET /
  about(): object {
    // E11: Respuesta con información básica de la API
    return {
      name: '',
      //description: 'An API for managing a Learning Management System.',
      description: 'API - Gestiona el LMS', // 'Descripción de la API',
      version: '1.0.0', // 'Versión de la API',
      author: 'Nats', // 'Autor de la API',
    };
  }
}
