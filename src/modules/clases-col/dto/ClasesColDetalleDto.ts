export class ColegioDto {
  id_colegio: number;
  nombre: string;
}

export class DocenteDto {
  id_docente: number;
  nombre: string;
}

export class NivelDto {
  id_nivel: number;
  nombre: string;
}

export class GradoDto {
  id_grado: number;
  nombre: string;
}

export class SeccionDto {
  id_seccion: number;
  nombre: string;
}

export class CursoDto {
  id_curso: number;
  nombre: string;
}

export class ClasesColDetalleDto {
  id_clases: number;
  colegio: ColegioDto;
  docente: DocenteDto;
  nivel: NivelDto;
  grado: GradoDto;
  seccion: SeccionDto;
  curso: CursoDto;
  observaciones: string;
}
