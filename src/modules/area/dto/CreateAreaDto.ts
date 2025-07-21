export class CreateAreaDto {
  nombre: string;
  estado?: boolean;
  tipo_curso: string; // Nuevo campo: 'Interno' o 'Externo'
}
