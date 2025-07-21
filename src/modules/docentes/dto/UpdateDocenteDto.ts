export class UpdateDocenteDto {
  nombre?: string;
  apellido?: string;
  correo?: string;
  especialidad?: string;
  estado?: string;
  id_perfil?: number; // Perfil docente, ejemplo: 3
  id_colegio?: number; // Colegio al que pertenece
}
