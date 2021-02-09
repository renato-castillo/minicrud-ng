import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Egreso } from 'src/app/models/egreso';
import { EgresoService } from 'src/app/services/egreso.service';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-egreso-form',
  templateUrl: './egreso-form.component.html',
  styleUrls: ['./egreso-form.component.css']
})
export class EgresoFormComponent implements OnInit {

  title = 'Registrar egreso';
  haveParameter: boolean;
  id: number;
  egreso: Egreso = new Egreso();

  form: FormGroup;
  detalleForm: FormGroup;
  total = 0;
  cantidadTotal = 0;

  constructor(private fb: FormBuilder, private egresoService: EgresoService, private utilService: UtilService,
              private route: ActivatedRoute) {
     this.crearFormulario();
     this.crearDetalleForm();
     const id = this.route.snapshot.paramMap.get('id');
     this.haveParameter = this.utilService.haveParameter(id);
     if (this.haveParameter) {
       this.id = Number(id);
       this.egresoService.obtener(this.id).subscribe(rs => {
         this.egreso = rs;
         this.title = 'Editar egreso';
         this.cargarData(this.egreso);
       }, () => {
         this.utilService.errorMessage('Egreso no encontrado');
         this.utilService.redirect('/dashboard/egresos');
       })
     }
   }

  ngOnInit(): void {
  }

  get detalles(): FormArray {
    return this.form.get('detalles') as FormArray;
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      detalles: this.fb.array([])
    });
  }

  crearDetalleForm(): void {
    this.detalleForm = this.fb.group({
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      cantidad: ['', [Validators.required]]
    });
  }

  agregarDetalle(): void {
    if (this.detalleForm.valid) {
      const descripcion = this.detalleForm.value.descripcion;
      const precio = this.detalleForm.value.precio;
      const cantidad = this.detalleForm.value.cantidad;
      const validacion = descripcion.trim();
      if (validacion.length > 0) {
        if(this.detalles.length > 0) {
          let coincidencias = 0;
          this.detalles.controls.forEach(d => {
            let descripcion = d.value.descripcion.trim();
            if(validacion.toUpperCase() === descripcion.toUpperCase() && precio === d.value.precio){
              d.value.cantidad += cantidad;
              coincidencias++;
              this.calcularTotal();
            }
          })
          if(coincidencias === 0){
            this.detalles.push(
              new FormControl({
                descripcion: descripcion,
                precio: precio,
                cantidad: cantidad,
              })
            );
            this.calcularTotal();
          }
        } else {
          this.detalles.push(
            new FormControl({
              descripcion: descripcion,
              precio: precio,
              cantidad: cantidad,
            })
          );
          this.calcularTotal();
        }
      } else {
        this.utilService.errorMessage('Descripción vacía', 'Complete la descripción');
      }
    } else {
      this.utilService.errorMessage('Detalle inválido', 'Rellene los campos obligatorios');
    }
  }

  borrarDetalle(i: number): void {
    let coincidencias = 0;
    this.detalles.controls.forEach(d => {
      if(d.value.cantidad > 1) {
        d.value.cantidad--;
        coincidencias++;
        this.calcularTotal();
      }
    });
    if(coincidencias === 0) {
      this.detalles.removeAt(i);
      this.calcularTotal();
    }
  }

  guardar(): void {
    let accion: Observable<any>;
    if (this.detalles.length > 0 && this.form.valid) {
      let egreso = this.form.value as Egreso;
      if(!this.haveParameter){
        accion = this.egresoService.agregar(egreso);
      } else {
        accion = this.egresoService.modificar(this.id, egreso);
      }
      accion.subscribe(() => {
        this.utilService.sucessMessage('Egreso agregado', 'Se agregó correctamente');
        this.utilService.redirect('/dashboard/egresos');
      }, () => {
        this.utilService.errorMessage('Error al guardar', 'Contacte con sistemas');
      });
    } else {
      this.utilService.errorMessage('Detalle vacío', 'Debe agregar detalles');
    }
  }

  calcularTotal(): void {
    this.total = 0;
    this.cantidadTotal = 0;
    this.detalles.controls.forEach(d => {
      this.total += d.value.precio * d.value.cantidad;
      this.cantidadTotal += d.value.cantidad;
    })
  }

  cargarData(egreso: Egreso): void {
    egreso.detalles.forEach(de => {
      this.detalles.push(
        new FormControl({
          descripcion: de.descripcion,
          precio: de.precio,
          cantidad: de.cantidad,
        })
      );
    })
    this.calcularTotal();
  }

}
