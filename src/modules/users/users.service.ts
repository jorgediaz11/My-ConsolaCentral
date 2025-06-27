// 06 Procesamiento de la Lógica de Negocio
// Contiene la lógica de negocio y acceso a datos.

// E19: Servicio para la lógica de negocio de usuarios
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';

// Si Role es un enum:
enum Role {
  SuperAdmin = 1,
  // otros roles...
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Inyecta el repositorio de la entidad User para acceder a la base de datos.
  ) {}

  // E20: Obtener todos los usuarios de la base de datos
  findAll(): Promise<User[]> {
    return this.usersRepository.find(); // Devuelve todos los usuarios de la base de datos.
  }

  // E21: Obtener un usuario por ID
  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id }); // Devuelve un usuario específico por su ID.
  }

  findOneByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username }); // Devuelve un usuario específico por su nombre de usuario.
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email }); // Devuelve un usuario específico por su correo electrónico.
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id); // Elimina un usuario específico por su ID.
  }

  // E35: Validar usuario y contraseña
  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ username });
    console.log('DB password:', user?.password, 'Input password:', password);
    //if (user && (await bcrypt.compare(password, user.password))) {
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  // E22: Crear un nuevo usuario en la base de datos
  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const user = this.usersRepository.create(createUserDto);
  //   return await this.usersRepository.save(user); // Crea un nuevo usuario y lo guarda en la base de datos.
  // }

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const user = this.usersRepository.create({
  //     ...createUserDto,
  //     contrasenaHash: createUserDto.password, // O el hash si usas bcrypt
  //   });
  //   return await this.usersRepository.save(user);
  // }

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Ya no existe el campo contrasenaHash, solo usamos los campos del DTO
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async createSuperAdmin(): Promise<void> {
    const existingAdmin = await this.usersRepository.findOne({
      // Busca un usuario existente con el correo electrónico
      where: { email: 'admin@lms.com' }, // Cambia esto por el correo electrónico del superadmin
    });

    if (!existingAdmin) {
      const saltRounds = 10; // Número de rondas para el hash
      const hashedPassword = await bcrypt.hash('root:toor', saltRounds); // Cambia esto por un hash en producción

      const superAdmin = this.usersRepository.create({
        username: 'superadmin', // Cambia esto por el nombre de usuario del superadmin
        //password: hashedPassword, // Cambia esto por un hash en producción
        password: hashedPassword, // Cambia esto por un hash en producción
        email: 'admin@lms.com', // Cambia esto por el correo electrónico del superadmin
        nombre: 'Super', // Cambia esto por el nombre del superadmin
        apellido: 'Admin', // Cambia esto por el apellido del superadmin
        idRol: Role.SuperAdmin,
      });

      await this.usersRepository.save(superAdmin); // Guarda el nuevo superadmin en la base de datos
      console.debug('Superadmin created successfully'); // Mensaje de éxito
    } else {
      console.debug('Superadmin already exists'); // Mensaje de que ya existe
    }
  }

  // Actualizar usuario por ID
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.usersRepository.update(id, updateUserDto);
    return this.findOne(id);
  }
}
