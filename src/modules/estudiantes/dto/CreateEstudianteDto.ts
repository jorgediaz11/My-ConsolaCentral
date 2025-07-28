export class CreateEstudianteDto {
  nombre: string;
  apellido: string;
  correo: string;
  // grado: string;
  id_perfil: number; // Perfil estudiante, ejemplo: 4
  id_colegio: number; // Colegio al que pertenece
  telefono: string;
  direccion: string;
  fecha_nacimiento: Date;
  estado: boolean;
  username: string;
  password: string;
  // editor_metadata?: string;
  // editor_privilegios?: string;
  foto_perfil?: string;
  ultimo_acceso?: Date;
}
