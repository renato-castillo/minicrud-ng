import { DetalleEgreso } from "./detalleEgreso";
import { Usuario } from "./usuario";

export class Egreso {
    idEgreso: number;
    detalles: DetalleEgreso[];
    total: number;
    fechaCreacion: Date;
    usuarioCreacion: Usuario;
    usuarioModificacion: Usuario;
    fechaModificacion: Date;
}