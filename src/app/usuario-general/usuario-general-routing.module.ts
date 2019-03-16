import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavegacionGeneralComponent } from './navegacion-general/navegacion-general.component';
import { DashboardGeneralComponent } from './dashboard-general/dashboard-general.component';
import { CatalogoGeneralComponent } from './catalogo-general/catalogo-general.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: NavegacionGeneralComponent,
    children:[
      {path: '', component: DashboardGeneralComponent},
      {path: 'catalogo-general', component: CatalogoGeneralComponent},
      {path: 'contacto', component: ContactoComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioGeneralRoutingModule { }
