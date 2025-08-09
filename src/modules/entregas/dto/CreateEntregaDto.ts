export class CreateEntregaDto {
  id_actividad: number;
  id_estudiante: number;
  id_clasecol: number;
  respuesta_texto: string;
  respuesta_archivo: string;
  puntaje_obtenido: number;
  fecha_entrega: Date;
  estado: boolean;
}
