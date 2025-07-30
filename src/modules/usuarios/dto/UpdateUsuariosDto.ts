export class UpdateUsuariosDto {
  username?: string;
  password?: string;
  nombres?: string;
  apellido?: string;
  correo?: string;
  id_perfil?: number;
  id_colegio?: number; // Nuevo campo
  estado?: boolean;
  id_grado?: number; // Solo para estudiantes, opcional
}
