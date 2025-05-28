// 05 Procesamiento de la Lógica de Negocio
// Contiene la lógica de negocio y acceso a datos.
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role, User } from '../../models/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/CreateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,  // Inyecta el repositorio de la entidad User para acceder a la base de datos.
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find(); // Devuelve todos los usuarios de la base de datos.
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });  // Devuelve un usuario específico por su ID.
  }

  findOneByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });  // Devuelve un usuario específico por su nombre de usuario.
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email }); // Devuelve un usuario específico por su correo electrónico.
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);  // Elimina un usuario específico por su ID.
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);  // Crea un nuevo usuario y lo guarda en la base de datos.
  }

  async createSuperAdmin(): Promise<void> {
    const existingAdmin = await this.usersRepository.findOne({    // Busca un usuario existente con el correo electrónico
      where: { email: 'admin@lms.com' },    // Cambia esto por el correo electrónico del superadmin
    });

    if (!existingAdmin) {
      const saltRounds = 10;  // Número de rondas para el hash
      const hashedPassword = await bcrypt.hash('root:toor', saltRounds);  // Cambia esto por un hash en producción

      const superAdmin = this.usersRepository.create({
        username: 'superadmin', // Cambia esto por el nombre de usuario del superadmin
        password: hashedPassword, // Cambia esto por un hash en producción
        email: 'admin@lms.com',
        firstName: 'Super',
        lastName: 'Admin',
        role: Role.ADMIN
      });

      await this.usersRepository.save(superAdmin);  // Guarda el nuevo superadmin en la base de datos
        console.debug('Superadmin created successfully'); // Mensaje de éxito
    } else {
      console.debug('Superadmin already exists'); // Mensaje de que ya existe
    }
  }
}
