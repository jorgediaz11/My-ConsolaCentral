export class CreateColegioDto {
  id_colegio: number;
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
  estado: string;
  ubigeo: string; // Nuevo campo para el código de distrito
}
