import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Perfil } from '../models/perfil';
import { AuthRequestDTO } from '../models/dto/authRequestDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.HOST}/login`;
  private _usuario: Perfil;

  constructor(private http: HttpClient){}

  login(req: AuthRequestDTO): Observable<Perfil>{
    return this.http.post<Perfil>(`${this.url}`, req);
  }

  public get perfil(): Perfil {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Perfil;
      return this._usuario;
    }
    return new Perfil();
  }

  guardarUsuario(perfil: Perfil): void {
    this._usuario = new Perfil();
    this._usuario.idPerfil = perfil.idPerfil;
    this._usuario.nombres = perfil.nombres;
    this._usuario.apellidos = perfil.apellidos;
    sessionStorage.setItem('usuario', JSON.stringify(this.perfil));
  }

  isAuthenticated(): boolean {
    let usuario = sessionStorage.getItem('usuario');
    if (usuario != null){
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this._usuario = null;
    sessionStorage.clear();
  }

}
