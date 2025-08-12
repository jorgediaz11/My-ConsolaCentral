export class CreateActividadDto {
  id_colegio: number;
  id_curso: number;
  id_clasecol: number;
  id_libro: number;
  id_unidad: number;
  titulo: string;
  descripcion: string;
  id_tipo_actividad: number;
  creador_id: number;
  fecha_creacion: Date;
  fecha_limite: Date;
  recurso_url: string;
  estado: boolean;
}
