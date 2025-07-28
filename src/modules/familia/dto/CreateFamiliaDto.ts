export class CreateFamiliaDto {
  nombres: string;
  apellido: string;
  correo: string;
  id_perfil: number; // Perfil familia, ejemplo: 5
  id_colegio: number; // Colegio al que pertenece el estudiante
  telefono: string;
  direccion: string;
  fecha_nacimiento: Date;
  estado: boolean;
  username: string;
  password: string;
  estudiante_codigo: string;
  foto_perfil?: string;
  ultimo_acceso?: Date;
}
