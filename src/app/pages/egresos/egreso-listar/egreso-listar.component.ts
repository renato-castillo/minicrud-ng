import { Component, OnInit } from '@angular/core';
import { DetalleEgreso } from 'src/app/models/detalleEgreso';
import { Egreso } from 'src/app/models/egreso';
import { EgresoService } from 'src/app/services/egreso.service';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-egreso-listar',
  templateUrl: './egreso-listar.component.html',
  styleUrls: ['./egreso-listar.component.css']
})
export class EgresoListarComponent implements OnInit {

  egresos: Egreso[] = [];
  egreso: Egreso;
  total: number;
  cantidadTotal: number;

  constructor(private egresoService: EgresoService, private utilService: UtilService) { }

  ngOnInit(): void {
    this.listarEgresos();
  }

  listarEgresos(): void {
    this.egresoService.listar().subscribe(rs => {
      this.egresos = rs;
    }, err => {
      this.utilService.errorMessage('Error al obtener egresos', 'Contacte con sistemas');
    })
  }

  verDetalle(egreso: Egreso){
    this.cantidadTotal = 0;
    this.egreso = egreso;
    this.egreso.detalles.forEach(de => {
      this.cantidadTotal += de.cantidad;
    })
  }

}
