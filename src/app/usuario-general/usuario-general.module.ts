import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioGeneralRoutingModule } from './usuario-general-routing.module';
import { DashboardGeneralComponent } from './dashboard-general/dashboard-general.component';
import { CatalogoGeneralComponent } from './catalogo-general/catalogo-general.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavegacionGeneralComponent } from './navegacion-general/navegacion-general.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MaterialModule } from '../shared/material/material.module';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [DashboardGeneralComponent, CatalogoGeneralComponent, ContactoComponent, NavegacionGeneralComponent, LoginComponent, RegistroComponent, PiePaginaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MDBBootstrapModule,
    UsuarioGeneralRoutingModule
  ]
})
export class UsuarioGeneralModule { }
