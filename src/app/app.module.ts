import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import * as $ from 'jquery';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteListarComponent } from './pages/clientes/cliente-listar/cliente-listar.component';
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoListarComponent } from './pages/productos/producto-listar/producto-listar.component';
import { ProductoFormComponent } from './pages/productos/producto-form/producto-form.component';
import { EgresosComponent } from './pages/egresos/egresos.component';
import { EgresoListarComponent } from './pages/egresos/egreso-listar/egreso-listar.component';
import { EgresoFormComponent } from './pages/egresos/egreso-form/egreso-form.component';
import { DetalleEgresoModalComponent } from './pages/egresos/detalle-egreso-modal/detalle-egreso-modal.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { VentaFormComponent } from './pages/ventas/venta-form/venta-form.component';
import { VentaListarComponent } from './pages/ventas/venta-listar/venta-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    ClientesComponent,
    ClienteListarComponent,
    ClienteFormComponent,
    ProductosComponent,
    ProductoListarComponent,
    ProductoFormComponent,
    EgresosComponent,
    EgresoListarComponent,
    EgresoFormComponent,
    DetalleEgresoModalComponent,
    VentasComponent,
    VentaFormComponent,
    VentaListarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
