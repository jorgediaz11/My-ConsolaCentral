export class CreateCalificacionDto {
  id_alumno: number;
  id_curso: number;
  id_evaluador: number;
  id_material: number;
  id_leccion: number;
  id_unidad: number;
  puntuacion: number;
  fecha_evaluacion: Date;
  comentario: string;
  estado: boolean;
}
