import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private utilService: UtilService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.productoService.listar().subscribe(rs => {
      this.productos = rs;
    }, () => {
      this.utilService.errorMessage('Error al obtener productos', 'Contacte con sistemas');
    })
  }

  anular(producto: Producto): void {
    this.productoService.eliminar(producto).subscribe(rs => {
      this.utilService.sucessMessage('Producto eliminado', `${rs.descripcion} fue eliminado con éxito`);
      this.listarProductos();
    }, () => {
      this.utilService.errorMessage('Error al eliminar', 'Contacte con sistemas');
    })
  }

}
