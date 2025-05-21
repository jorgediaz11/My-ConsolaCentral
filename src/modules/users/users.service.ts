import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  findOneByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createSuperAdmin(): Promise<void> {
    const existingAdmin = await this.usersRepository.findOne({
      where: { email: 'admin@lms.com' },
    });

    if (!existingAdmin) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash('root:toor', saltRounds);

      const superAdmin = this.usersRepository.create({
        username: 'superadmin',
        password: hashedPassword, // Cambia esto por un hash en producción
        email: 'admin@lms.com',
        firstName: 'Super',
        lastName: 'Admin',
      });

      await this.usersRepository.save(superAdmin);
      console.debug('Superadmin created successfully');
    } else {
      console.debug('Superadmin already exists');
    }
  }
}
