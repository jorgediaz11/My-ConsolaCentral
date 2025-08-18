export class UpdateColegioDto {
  nombre?: string;
  direccion?: string;
  telefono?: string;
  correo?: string;
  estado?: boolean;
  codigomodular?: string;
  website?: string;
  logo?: string;
  director?: string;
  niveleseducativos?: string;
  turnos?: string;
  poblacion?: number;
  fechafundacion?: Date;
  fechacreacion?: Date;
  fechaactualizacion?: Date;
  id_departamento?: number;
  id_provincia?: number;
  id_distrito?: number;
  id_ubigeo?: string;
  colegio_cliente?: boolean;
}
