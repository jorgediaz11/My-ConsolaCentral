import { Role } from 'src/modules/users/user.entity';

export class CreateUserDto {
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  correo: string;
  id_perfil: number;
  // otros campos según tu modelo...
  role: Role;
}
