export class CreateDocenteDto {
  nombre: string;
  apellido: string;
  correo: string;
  // especialidad: string;
  id_perfil: number; // Perfil docente, ejemplo: 3
  id_colegio: number; // Colegio al que pertenece
  telefono: string;
  direccion: string;
  fecha_nacimiento: Date;
  estado: boolean;
  username: string;
  password: string;
  docente_titulo: string;
  foto_perfil: string;
  ultimo_acceso: Date;
  observaciones?: string; // Observaciones adicionales
}
