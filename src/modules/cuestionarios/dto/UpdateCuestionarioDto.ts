export class UpdateCuestionarioDto {
  id_libro?: number;
  id_unidad?: number;
  id_curso?: number;
  id_clasecol?: number;
  titulo?: string;
  descripcion?: string;
  creador_id?: number;
  fecha_creacion?: Date;
  estado?: boolean;
}
