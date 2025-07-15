export class UpdateMaterialDto {
  id_usuario_creador?: number;
  id_tipo_material?: number;
  nombre?: string;
  descripcion?: string;
  ruta_archivo?: string;
  tamano_bytes?: number;
  duracion_segundos?: number;
  fecha_creacion?: Date;
  id_configuracion?: number;
  estado?: boolean;
}
