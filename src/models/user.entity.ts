// 06 Acceso a la Base de Datos
// Define la entidad y estructura de la tabla de usuarios.
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // Genera automáticamente un ID único para cada usuario.
  id: number;

  @Column()   // Define una columna para el nombre de pila del usuario.
  firstName: string;

  @Column()  // Define una columna para el apellido del usuario.//  
  lastName: string;

  @Column() // Define una columna para el correo electrónico del usuario.// 
  email: string;

  @Column() // Define una columna para el nombre de usuario del usuario.//  
  username: string;

  @Column()   // Define una columna para la contraseña del usuario.//
  password: string;
}
