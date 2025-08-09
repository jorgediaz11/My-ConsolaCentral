export class CreatePreguntaDto {
  id_cuestionario: number;
  tipo_pregunta: string;
  enunciado: string;
  puntaje: number;
  orden: number;
  estado: boolean;
}
