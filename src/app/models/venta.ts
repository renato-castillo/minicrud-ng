import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalleVenta";
import { EstadoVenta } from "./estadoVenta";
import { Usuario } from "./usuario";

export class Venta {
    idVenta: number;
    fecha: Date;
    cliente: Cliente;
    nombres: string;
    total: number;
    detalles: DetalleVenta[];
    fechaCreacion: Date;
    usuarioCreacion: Usuario;
    usuarioModificacion: Usuario;
    fechaModificacion: Date;
    estado: boolean;
    estadoVenta: EstadoVenta;
}