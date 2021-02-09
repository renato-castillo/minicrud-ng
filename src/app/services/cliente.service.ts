import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = `${environment.HOST}/clientes`;

  constructor(private http: HttpClient) { }

  registrar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}`, cliente);
  }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}`);
  }

  obtener(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  modificar(id: number, cliente: Cliente): Observable<Cliente>{
    cliente.idCliente = id;
    return this.http.put<Cliente>(`${this.url}/modificar`, cliente);
  }

  eliminar(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}/eliminar`, cliente);
  }


}
