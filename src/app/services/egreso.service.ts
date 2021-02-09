import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Egreso } from '../models/egreso';
import { Usuario } from '../models/usuario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  private url = `${environment.HOST}/egresos`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  agregar(egreso: Egreso): Observable<Egreso>{
    let usuario = new Usuario();
    usuario.idUsuario = this.authService.perfil.idPerfil;
    egreso.usuarioCreacion = usuario;
    return this.http.post<Egreso>(`${this.url}`, egreso);
  }

  listar(): Observable<Egreso[]>{
    return this.http.get<Egreso[]>(`${this.url}`);
  }

  obtener(id: number): Observable<Egreso>{
    return this.http.get<Egreso>(`${this.url}/${id}`);
  }

  modificar(id: number, egreso: Egreso): Observable<Egreso>{
    let usuario = new Usuario();
    usuario.idUsuario = this.authService.perfil.idPerfil;
    egreso.usuarioModificacion = usuario;
    egreso.idEgreso = id;
    return this.http.put<Egreso>(`${this.url}/modificar`, egreso);
  }

  eliminar(egreso: Egreso): Observable<Egreso> {
    return this.http.put<Egreso>(`${this.url}/eliminar`, egreso);
  }
}
