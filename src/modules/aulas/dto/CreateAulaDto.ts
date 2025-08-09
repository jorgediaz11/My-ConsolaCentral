export class CreateAulaDto {
  id_colegio: number;
  id_grado: number;
  nombre: string;
  capacidad: number;
  tipo_aula: string;
  creador_id: number;
  fecha_creacion: Date;
  estado: boolean;
}
