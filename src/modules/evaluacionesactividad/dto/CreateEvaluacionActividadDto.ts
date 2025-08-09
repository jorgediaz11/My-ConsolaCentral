export class CreateEvaluacionActividadDto {
  id_actividad: number;
  id_estudiante: number;
  id_clasecol: number;
  puntaje_total: number;
  completado: boolean;
  fecha_completado: Date;
}
