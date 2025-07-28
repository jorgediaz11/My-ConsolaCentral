export class CreateColegioDto {
  id_colegio: number;
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
  estado: boolean;
  id_ubigeo: string; // Nuevo campo para el código de distrito
  colegio_cliente: boolean;
}
