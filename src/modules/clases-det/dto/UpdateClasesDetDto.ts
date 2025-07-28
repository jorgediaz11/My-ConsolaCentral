export class UpdateClasesDetDto {
  id_clasecol: number; // <-- Agregado
  id_curso?: number;
  id_estudiante?: number;
  observaciones?: string;
  estado?: string;
}
