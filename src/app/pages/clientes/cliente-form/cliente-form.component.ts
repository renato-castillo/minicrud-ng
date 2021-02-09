import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  title = 'Registrar cliente';
  form: FormGroup;
  haveParameter: boolean;
  id: number;

  cliente: Cliente = new Cliente();

  constructor(private fb: FormBuilder, private utilService: UtilService, private clienteService: ClienteService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.haveParameter = this.utilService.haveParameter(id);
    if(this.haveParameter) {
      this.id = Number(id);
      this.clienteService.obtener(this.id).subscribe(rs => {
        this.cliente = rs;
        this.title = 'Editar trabajador';
        this.cargarData();
      }, () => {
        this.utilService.errorMessage('Usuario no encontrado');
        this.utilService.redirect('/dashboard/clientes');
      })
    }
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]]
    });
  }

  guardar(): void {
    let accion: Observable<any>;
    if(this.form.valid) {
      let cliente = this.form.value as Cliente;
      if(!this.haveParameter){
        accion = this.clienteService.registrar(cliente);
      } else {
        accion = this.clienteService.modificar(this.id, cliente);
      }
      accion.subscribe(rs => {
        this.utilService.sucessMessage(`Guardado`, `${rs.nombres} ${rs.apellidos} fue guardado correctamente`);
        this.utilService.redirect('/dashboard/clientes/');
      }, () => {
        this.utilService.errorMessage('Error al guardar', 'Contacte con sistemas');
      })
    } else {
      this.utilService.errorMessage('Formulario inválido', 'Rellene los campos obligatorios');
    }
  }

  cargarData(): void {
    if(this.haveParameter){
      this.form.reset({
        nombres: this.cliente.nombres,
        apellidos: this.cliente.apellidos
      });
    }
  }

}
