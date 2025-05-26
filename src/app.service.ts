// Created by: [Your Name]
import { Injectable } from '@nestjs/common';

@Injectable() // Injectable decorator to mark this class as a provider
export class AppService {
  getHello(): string {
    return 'Hello World! - 02';  // Returns a greeting message
  }
}
