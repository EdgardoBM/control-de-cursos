import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AlumnoComponent } from './alumno/alumno/alumno.component';
import { CursosComponent } from './cursos/cursos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NuevaPromoComponent } from './nueva-promo/nueva-promo.component';
import { NuevaSedeComponent } from './nueva-sede/nueva-sede.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { RegistroComponent } from './registro/registro.component';
import { SedesComponent } from './sedes/sedes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [AlumnoComponent, CursosComponent, DashboardComponent, NavBarComponent, NuevaPromoComponent, NuevaSedeComponent,
  NuevoUsuarioComponent, NuevoCursoComponent, PiePaginaComponent, PromocionesComponent, RegistroComponent, SedesComponent, UsuariosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MDBBootstrapModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
