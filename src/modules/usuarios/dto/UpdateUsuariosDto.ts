export class UpdateUsuariosDto {
  username?: string;
  password?: string;
  nombre?: string;
  apellido?: string;
  correo?: string;
  id_perfil?: number;
  id_colegio?: number; // Nuevo campo
  estado?: boolean;
}
