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
export class Usuarios {
  // E32: Nombre de usuario
  @Column() // Define una columna para el nombre de usuario del usuario.//
  username: string;

  // E33: Contraseña (hash)
  @Column() // Define una columna para la contraseña del usuario.//
  password: string;
  // E31: ID autogenerado
  @PrimaryGeneratedColumn({ name: 'id_usuario' }) // Genera automáticamente un ID único para cada usuario.
  id_usuario: number;

  @Column({ name: 'id_perfil' })
  id_perfil: number;

  @Column({ type: 'int', nullable: true })
  id_colegio: number; // Nuevo campo

  @Column() // Define una columna para el nombre de pila del usuario.
  nombres: string;

  @Column() // Define una columna para el apellido del usuario.//
  apellido: string;

  @Column() // Define una columna para el correo electrónico del usuario.//
  correo: string;

  // @Column({ name: 'contraseña_hash' })
  // contrasenaHash: string;

  @Column({ type: 'boolean' })
  estado: boolean;

  @Column({ type: 'int', nullable: true })
  id_grado?: number;
}
