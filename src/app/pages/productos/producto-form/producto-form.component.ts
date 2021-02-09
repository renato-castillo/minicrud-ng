import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  title = 'Registrar producto';
  form: FormGroup;
  haveParameter: boolean;
  id: number;

  producto: Producto = new Producto();

  constructor(private fb: FormBuilder, private utilService: UtilService, private productoService: ProductoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.haveParameter = this.utilService.haveParameter(id);
    if(this.haveParameter){
      this.id = Number(id);
      this.productoService.obtener(this.id).subscribe(rs => {
        this.producto = rs;
        this.title = 'Editar producto';
        this.cargarData();
      }, () => {
        this.utilService.errorMessage('Producto no encontrado');
        this.utilService.redirect('/dashboard/productos');
      });
    }
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]]
    });
  }

  guardar(): void {
    let accion: Observable<any>;
    if(this.form.valid) {
      let producto = this.form.value as Producto;
      producto.precio = Number(this.form.value.precio);
      if(!this.haveParameter){
        accion = this.productoService.agregar(producto);
      } else {
        accion = this.productoService.modificar(this.id, producto);
      }
      accion.subscribe(rs => {
        this.utilService.sucessMessage('Guardado', `${rs.descripcion} fue guardado correctamente`);
        this.utilService.redirect('/dashboard/productos');
      }, () => {
        this.utilService.errorMessage('Error al guardar', 'Contacte con sistemas');
      })
    } else {
      this.utilService.errorMessage('Formulario inválido', 'Rellene los campos obligatorios');
    }
  }

  cargarData(): void {
    if(this.haveParameter) {
      this.form.reset({
        descripcion: this.producto.descripcion,
        precio: this.producto.precio
      });
    }
  }

}
