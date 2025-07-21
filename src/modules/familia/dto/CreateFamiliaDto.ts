export class CreateFamiliaDto {
  nombre: string;
  apellido: string;
  correo: string;
  estado: string;
  id_perfil: number; // Perfil familia, ejemplo: 5
  id_colegio: number; // Colegio al que pertenece el estudiante
}
