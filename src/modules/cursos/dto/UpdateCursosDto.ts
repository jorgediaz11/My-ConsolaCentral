export class UpdateCursosDto {
  id_area?: number;
  id_nivel?: number; // <-- Nuevo campo
  id_grado?: number;
  nombre?: string;
  codigo_libro?: string; // Nuevo campo: código del libro
  estado?: boolean;
  tipo_curso?: string; // Nuevo campo: 'Interno' o 'Externo'
  id_colegio?: number; // Nuevo campo: ID del colegio afiliado
}
