import { Producto } from "./producto";

export class DetalleVenta {
    idDetalleVenta: number;
    producto: Producto;
    cantidad: number;
    precioUnitario: number;
    importe: number;
}