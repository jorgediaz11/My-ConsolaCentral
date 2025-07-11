import { Role } from 'src/modules/users/user.entity';

export class CreateUserDto {
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  email: string;
  idRol: number;
  // otros campos según tu modelo...
  role: Role;
}
