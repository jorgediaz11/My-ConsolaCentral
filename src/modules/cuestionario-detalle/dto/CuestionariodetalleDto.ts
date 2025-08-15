export class OpcionDto {
  id_opcion: number;
  nombre_opcion: string;
  es_correcta: boolean;
  par_relacion?: string;
}

export class PreguntaDto {
  id_pregunta: number;
  tipo_pregunta: string;
  nombre_pregunta: string;
  puntaje_pregunta: number;
  opciones: OpcionDto[];
}

export class CuestionarioDetalleDto {
  id_cuestionario: number;
  nombre_cuestionario: string;
  preguntas: PreguntaDto[];
}