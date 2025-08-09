export class UpdateEvaluacionDto {
  id_cuestionario?: number;
  id_estudiante?: number;
  id_clasecol?: number;
  puntaje_total?: number;
  completado?: boolean;
  fecha_completado?: Date;
}
