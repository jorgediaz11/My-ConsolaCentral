
import { Controller, Get, HttpStatus, Injectable, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService ) {}

  @Get()
  list() {
    return this.userService.findAll(); 
    // console.debug(users.length)
    // return res.status(HttpStatus.OK).json(users);
  }

  /* findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  } */
}
