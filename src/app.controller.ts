import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Controller decorator to define a controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  // HTTP GET request handler for the root path
  getHello(): string {
    return this.appService.getHello();  // Call to getHello method of AppService
  }
}
