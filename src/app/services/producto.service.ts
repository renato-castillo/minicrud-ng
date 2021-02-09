import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';
import { Usuario } from '../models/usuario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = `${environment.HOST}/productos`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  agregar(producto: Producto): Observable<Producto>{
    let usuario = new Usuario();
    usuario.idUsuario = this.authService.perfil.idPerfil;
    producto.usuarioCreacion = usuario;
    return this.http.post<Producto>(`${this.url}`, producto);
  }

  listar(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}`);
  }

  obtener(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/${id}`);
  }

  modificar(id: number, producto: Producto): Observable<Producto>{
    let usuario = new Usuario();
    usuario.idUsuario = this.authService.perfil.idPerfil;
    producto.usuarioModificacion = usuario;
    producto.idProducto = id;
    return this.http.put<Producto>(`${this.url}/modificar`, producto);
  }

  eliminar(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.url}/eliminar`, producto);
  }

}
