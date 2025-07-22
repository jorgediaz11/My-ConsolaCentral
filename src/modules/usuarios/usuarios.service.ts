// 06 Procesamiento de la Lógica de Negocio
// Contiene la lógica de negocio y acceso a datos.

// E19: Servicio para la lógica de negocio de usuarios
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuarios } from './usuarios.entity';
// If 'Usuarios' is not exported correctly, ensure the export in usuarios.entity.ts is:
// export class Usuarios { ... }
import { CreateUsuariosDto } from './dto/CreateUsuariosDto';
import { UpdateUsuariosDto } from './dto/UpdateUsuariosDto';

// Si Role es un enum:
enum Role {
  SuperAdmin = 1,
  // otros roles...
}

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>, // Inyecta el repositorio de la entidad User para acceder a la base de datos.
  ) {}

  // E20: Obtener todos los usuarios de la base de datos
  findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find(); // Devuelve todos los usuarios de la base de datos.
  }
  findOne(id_usuario: number): Promise<Usuarios | null> {
    return this.usuariosRepository.findOneBy({ id_usuario: id_usuario }); // Devuelve un usuario específico por su ID.
  }
  // If 'Usuarios' is still an error type, replace 'Usuarios' with the correct class or interface name exported from './usuarios.entity'

  findOneByUsername(username: string): Promise<Usuarios | null> {
    return this.usuariosRepository.findOneBy({ username }); // Devuelve un usuario específico por su nombre de usuario.
  }

  findOneBycorreo(correo: string): Promise<Usuarios | null> {
    return this.usuariosRepository.findOneBy({ correo }); // Devuelve un usuario específico por su correo electrónico.
  }

  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id); // Elimina un usuario específico por su ID.
  }

  // E35: Validar usuario y contraseña
  async validateUser(
    username: string,
    password: string,
  ): Promise<Usuarios | null> {
    const usuarios = await this.usuariosRepository.findOneBy({ username });
    console.log(
      'DB password:',
      usuarios?.password,
      'Input password:',
      password,
    );
    //if (usuarios && (await bcrypt.compare(password, usuarios.password))) {
    if (usuarios && usuarios.password === password) {
      return usuarios;
    }
    return null;
  }

  // E22: Crear un nuevo usuario en la base de datos
  async create(createUsuariosDto: CreateUsuariosDto): Promise<Usuarios> {
    // Ya no existe el campo contrasenaHash, solo usamos los campos del DTO
    const user = this.usuariosRepository.create(createUsuariosDto);
    return await this.usuariosRepository.save(user);
  }

  async createSuperAdmin(): Promise<void> {
    const existingAdmin = await this.usuariosRepository.findOne({
      // Busca un usuario existente con el correo electrónico
      where: { correo: 'admin@lms2.com' }, // Cambia esto por el correo electrónico del superadmin
    });

    if (!existingAdmin) {
      const saltRounds = 10; // Número de rondas para el hash
      const hashedPassword = await bcrypt.hash('root:toor', saltRounds); // Cambia esto por un hash en producción

      const superAdmin = this.usuariosRepository.create({
        username: 'superadmin2', // Cambia esto por el nombre de usuario del superadmin
        //password: hashedPassword, // Cambia esto por un hash en producción
        password: hashedPassword, // Cambia esto por un hash en producción
        correo: 'admin@lms2.com', // Cambia esto por el correo electrónico del superadmin
        nombre: 'Super2', // Cambia esto por el nombre del superadmin
        apellido: 'Admin2', // Cambia esto por el apellido del superadmin
        id_perfil: Role.SuperAdmin,
      });

      await this.usuariosRepository.save(superAdmin); // Guarda el nuevo superadmin en la base de datos
      console.debug('Superadmin creado con éxito'); // Mensaje de éxito
    } else {
      console.debug('Superadmin ya existe'); // Mensaje de que ya existe
    }
  }

  // Actualizar usuario por ID
  async update(
    id_usuario: number,
    updateUsuariosDto: UpdateUsuariosDto,
  ): Promise<Usuarios | null> {
    await this.usuariosRepository.update(id_usuario, updateUsuariosDto);
    return this.findOne(id_usuario);
  }
}
