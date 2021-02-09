import { Perfil } from "./perfil";
import { Rol } from "./rol";

export class Usuario {
    idUsuario: number;
    perfil: Perfil;
    usuario: string;
    clave: string;
    estado: boolean;
    roles: Rol[];
    fechaCreacion: Date;
}