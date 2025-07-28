export class UpdateUnidadDto {
  id_curso?: number;
  nombre?: string;
  orden?: number;
  descripcion?: string; // Nuevo campo opcional
  estado?: boolean; // Indica si la unidad está activa o inactiva
}
