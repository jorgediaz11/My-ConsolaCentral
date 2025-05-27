import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "api version"', () => {
      expect(appController.about()).toMatchObject({name: 'LMS API',
        description: 'An API for managing a Learning Management System.',
        version: '1.0.0',
        author: 'Nats'})
    });
  });
});
