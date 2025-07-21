export class CreateEstudianteDto {
  nombre: string;
  apellido: string;
  correo: string;
  grado: string;
  estado: string;
  id_perfil: number; // Perfil estudiante, ejemplo: 4
  id_colegio: number; // Colegio al que pertenece
}
