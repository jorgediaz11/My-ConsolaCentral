export class UpdateRespuestaDto {
  id_pregunta?: number;
  id_estudiante?: number;
  id_cuestionario?: number;
  respuesta_valor?: string;
  id_opcion_seleccionada?: number;
  respuesta_relacion?: string;
  respuesta_texto?: string;
  respuesta_archivo?: string;
  puntaje_obtenido?: number;
  fecha_respuesta?: Date;
  estado?: boolean;
}
