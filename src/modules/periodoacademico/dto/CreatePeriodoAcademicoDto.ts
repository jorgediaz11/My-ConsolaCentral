export class CreatePeriodoAcademicoDto {
  nombre: string;
  anio: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  esta_activo?: boolean;
}
