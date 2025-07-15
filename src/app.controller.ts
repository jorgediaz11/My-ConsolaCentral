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
