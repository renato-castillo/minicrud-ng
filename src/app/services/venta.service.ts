import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Venta } from '../models/venta';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private url = `${environment.HOST}/ventas`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  agregar(venta: Venta): Observable<Venta>{
    let usuario = new Usuario();
    usuario.idUsuario = this.authService.perfil.idPerfil;
    venta.usuarioCreacion = usuario;
    return this.http.post<Venta>(`${this.url}`, venta);
  }

  listar(): Observable<Venta[]>{
    return this.http.get<Venta[]>(`${this.url}`);
  }

  obtener(id: number): Observable<Venta>{
    return this.http.get<Venta>(`${this.url}/${id}`);
  }

  modificar(id: number, venta: Venta): Observable<Venta>{
    let usuario = new Usuario();
    usuario.idUsuario = this.authService.perfil.idPerfil;
    venta.usuarioModificacion = usuario;
    venta.idVenta = id;
    return this.http.put<Venta>(`${this.url}/modificar`, venta);
  }

  eliminar(venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.url}/eliminar`, venta);
  }
}
