import { Usuario } from "./usuario";

export class Producto {
    idProducto: number;
    descripcion: string;
    precio: number;
    estado: boolean;
    fechaCreacion: Date;
    usuarioCreacion: Usuario;
    usuarioModificacion: Usuario;
    fechaModificacion: Date;
}