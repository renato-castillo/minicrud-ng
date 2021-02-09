import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/egreso';

@Component({
  selector: 'app-detalle-egreso-modal',
  templateUrl: './detalle-egreso-modal.component.html',
  styleUrls: ['./detalle-egreso-modal.component.css']
})
export class DetalleEgresoModalComponent implements OnInit {

  @Input() egreso: Egreso;
  @Input() cantidad: number;

  constructor() { }

  ngOnInit(): void {
  }

}
