export class CreateEditorDto {
  nombres: string;
  apellido: string;
  correo: string;
  // id_cursos: number[]; // Lista de cursos a los que tiene acceso
  telefono?: string;
  direccion?: string;
  fecha_nacimiento?: Date;
  estado: boolean;
  username: string;
  password: string;
  familia_relacion?: string;
  foto_perfil?: string;
  ultimo_acceso?: Date;
  id_perfil: number; // Perfil editor, ejemplo: 6
}
