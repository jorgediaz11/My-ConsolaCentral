import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  about(): object {
    return {
      name: 'LMS API',
      description: 'An API for managing a Learning Management System.',
      version: '1.0.0',
      author: 'Nats'
    }
  }
}
