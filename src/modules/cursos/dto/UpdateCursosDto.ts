export class UpdateCursosDto {
  id_area?: number;
  id_grado?: number;
  nombre?: string;
  codigo_libro?: string;
  estado?: boolean;
  tipo_curso?: string; // Nuevo campo: 'Interno' o 'Externo'
  id_colegio?: number; // Nuevo campo: ID del colegio afiliado
}
