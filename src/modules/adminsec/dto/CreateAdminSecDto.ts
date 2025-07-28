export class CreateAdminSecDto {
  nombres: string;
  apellido: string;
  correo: string;
  id_perfil: number; // Perfil directivo, ejemplo: 2
  id_colegio: number; // Colegio al que pertenece
  telefono?: string;
  direccion?: string;
  fecha_nacimiento?: Date;
  estado: boolean;
  username: string;
  password: string;
  admin_colegio_rol?: string;
  foto_perfil?: string;
  ultimo_acceso?: Date;
}
