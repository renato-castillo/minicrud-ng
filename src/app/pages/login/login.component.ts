import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthRequestDTO } from 'src/app/models/dto/authRequestDTO';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private utilService: UtilService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      clave: ['', Validators.required]
    });
  }

  iniciarSesion(): void {
    if(this.form.valid){
      let req = this.form.value as AuthRequestDTO;
      this.authService.login(req).subscribe(rs => {
        if(rs){
          this.authService.guardarUsuario(rs);
          this.utilService.redirect('dashboard');
        }
      }, () => {
        this.utilService.errorMessage('Credenciales incorrectas', 'Inténtelo de nuevo');
      });
    }
  }

}
