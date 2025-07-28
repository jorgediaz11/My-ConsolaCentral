export class UpdateColegioDto {
  nombre?: string;
  direccion?: string;
  telefono?: string;
  correo?: string;
  estado?: boolean;
  id_ubigeo?: string; // Nuevo campo para el código de distrito
  colegio_cliente?: boolean;
}
