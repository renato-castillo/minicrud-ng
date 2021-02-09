import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-venta-listar',
  templateUrl: './venta-listar.component.html',
  styleUrls: ['./venta-listar.component.css']
})
export class VentaListarComponent implements OnInit {

  ventas: Venta[] = [];

  constructor(private ventaService: VentaService, private utilService: UtilService) { }

  ngOnInit(): void {
    this.listarVentas();
  }

  listarVentas(): void {
    this.ventaService.listar().subscribe(rs => {
      this.ventas = rs;
      console.log(rs);
    }, () => {
      this.utilService.errorMessage('Error al obtener ventas', 'Contacte con sistemas');
    })
  }

}
