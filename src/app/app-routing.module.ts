import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './pages/clientes/cliente-listar/cliente-listar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EgresoFormComponent } from './pages/egresos/egreso-form/egreso-form.component';
import { EgresoListarComponent } from './pages/egresos/egreso-listar/egreso-listar.component';
import { EgresosComponent } from './pages/egresos/egresos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductoFormComponent } from './pages/productos/producto-form/producto-form.component';
import { ProductoListarComponent } from './pages/productos/producto-listar/producto-listar.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentaFormComponent } from './pages/ventas/venta-form/venta-form.component';
import { VentaListarComponent } from './pages/ventas/venta-listar/venta-listar.component';
import { VentasComponent } from './pages/ventas/ventas.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'clientes', component: ClientesComponent,
        children: [
          { path: '', component: ClienteListarComponent },
          { path: 'registrar', component: ClienteFormComponent },
          { path: 'editar/:id', component: ClienteFormComponent }
        ]
      },
      { path: 'productos', component: ProductosComponent,
        children: [
          { path: '', component: ProductoListarComponent },
          { path: 'registrar', component: ProductoFormComponent },
          { path: 'editar/:id', component: ProductoFormComponent }
        ]
      },
      { path: 'egresos', component: EgresosComponent,
        children: [
          { path: '', component: EgresoListarComponent },
          { path: 'registrar', component: EgresoFormComponent },
          { path: 'editar/:id', component: EgresoFormComponent }
        ]
      },
      { path: 'ventas', component: VentasComponent,
        children: [
          { path: '', component: VentaListarComponent },
          { path: 'registrar', component: VentaFormComponent },
          { path: 'editar/:id', component: VentaFormComponent }
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
