import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { DashboardAlumnoComponent } from './dashboard-alumno/dashboard-alumno.component';
import { PreinscripcionesComponent } from './preinscripciones/preinscripciones.component';
import { CatalogoAlumnoComponent } from './catalogo-alumno/catalogo-alumno.component';
import { NavegacionAlumnoComponent } from './navegacion-alumno/navegacion-alumno.component';
import { MaterialModule } from '../shared/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [DashboardAlumnoComponent, PreinscripcionesComponent, CatalogoAlumnoComponent, NavegacionAlumnoComponent, PiePaginaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MDBBootstrapModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
