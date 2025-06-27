// 09 Acceso a la Base de Datos 001
// Define la entidad y estructura de la tabla de usuarios.

// E30: Entidad User para mapear la tabla de usuarios en la base de datos
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Role {
  ADMIN = 'admin', // Define el rol de administrador.
  TEACHER = 'teacher', // Define el rol de profesor.
  STUDENT = 'student', // Define el rol de estudiante.
  GUEST = 'guest', // Define el rol de invitado.
  SUPER_ADMIN = 'super_admin', // Define el rol de superadministrador.
}

@Entity('usuario') // <-- aquí el nombre real de la tabla
export class User {
  // E31: ID autogenerado
  @PrimaryGeneratedColumn({ name: 'id_usuario' }) // Genera automáticamente un ID único para cada usuario.
  id: number;

  @Column({ name: 'id_colegio' })
  idColegio: number;

  @Column({ name: 'id_rol' })
  idRol: number;

  @Column() // Define una columna para el nombre de pila del usuario.
  nombre: string;

  @Column() // Define una columna para el apellido del usuario.//
  apellido: string;

  @Column() // Define una columna para el correo electrónico del usuario.//
  email: string;

  // @Column({ name: 'contraseña_hash' })
  // contrasenaHash: string;

  @Column()
  estado: string;

  // E32: Nombre de usuario
  @Column() // Define una columna para el nombre de usuario del usuario.//
  username: string;

  // E33: Contraseña (hash)
  @Column() // Define una columna para la contraseña del usuario.//
  password: string;

  // @Column({
  //   type: 'enum',
  //   enum: Role,
  //   default: Role.STUDENT,
  // })
  // role: Role;
  // E34: Otros campos relevantes...
}
