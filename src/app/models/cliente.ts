import { Venta } from "./venta";

export class Cliente {
    idCliente: number;
    nombres: string;
    apellidos: string;
    ventas: Venta[];
    estado: boolean;
}