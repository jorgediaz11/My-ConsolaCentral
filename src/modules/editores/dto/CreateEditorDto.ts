export class CreateEditorDto {
  nombre: string;
  apellido: string;
  correo: string;
  estado: string;
  id_perfil: number; // Perfil editor, ejemplo: 6
  id_cursos: number[]; // Lista de cursos a los que tiene acceso
}
