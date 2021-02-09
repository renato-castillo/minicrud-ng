import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private utilService: UtilService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  anular(cliente: Cliente): void {
    this.clienteService.eliminar(cliente).subscribe(rs => {
      this.utilService.sucessMessage('Cliente eliminado', `${rs.nombres} ${rs.apellidos} fue eliminado con éxito`);
      this.listarClientes();
    }, err => {
      this.utilService.errorMessage('Error al eliminar', 'Contacte con sistemas');
    })
  }

  listarClientes(): void {
    this.clienteService.listar().subscribe(rs => {
      this.clientes = rs;
    }, () => {
      this.utilService.errorMessage('Error al obtener clientes', 'Contacte con sistemas');
    });
  }

}
