export class CreateCursoCompletoDto {
  nombre: string;
  id_area: number;
  id_grado: number;
  estado: boolean;
  tipo_curso: string;
  id_colegio: number;
  id_nivel: number;
  codigo_libro?: string;
  descripcion?: string;
  cantidad_unidades: number;
  cantidad_lecciones_por_unidad: number;
  // otros campos si lo requieres
}
