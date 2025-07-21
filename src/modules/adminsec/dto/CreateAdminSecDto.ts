export class CreateAdminSecDto {
  nombre: string;
  apellido: string;
  correo: string;
  estado: string;
  id_perfil: number; // Perfil directivo, ejemplo: 2
  id_colegio: number; // Colegio al que pertenece
}
