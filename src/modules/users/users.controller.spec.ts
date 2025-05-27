
import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [UsersController],
        providers: [UsersService],
      }).compile();

    usersService = moduleRef.get(UsersService);
    usersController = moduleRef.get(UsersController);
  });

  describe('create', () => {
    it('should store new user', async () => {
      // const result = ['test'];
      // jest.spyOn(usersService, 'findAll').mockImplementation(() => result);

      expect(await usersController.create()).toBe(result);
    });
  });
});
