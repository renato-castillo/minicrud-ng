import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private router: Router, private toastr: ToastrService) { }

  redirect(ruta: string): void  {
    this.router.navigate([`${ruta}`]);
  }

  haveParameter(id: any): boolean{
    if(id){
      return true;
    } else {
      return false;
    }
  }

  redirectWithParameter(url: string, id: number): any {
    this.router.navigate([`${url}`]);
    return id;
  }

  sucessMessage(title: string, description?: string): void {
    if(description){
      this.toastr.success(`${description}`, `${title}`, {
        progressBar: true,
        positionClass: 'toast-bottom-right'
      });
    } else {
      this.toastr.success('', `${title}`, {
        progressBar: true,
        positionClass: 'toast-bottom-right'
      });
    }
  }

  errorMessage(title: string, description?: string): void {
    if(description){
      this.toastr.error(`${description}`, `${title}`, {
        progressBar: true,
        positionClass: 'toast-bottom-right'
      });
    } else {
      this.toastr.error('', `${title}`, {
        progressBar: true,
        positionClass: 'toast-bottom-right'
      });
    }
  }
}
