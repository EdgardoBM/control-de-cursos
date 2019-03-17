import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { DashboardAlumnoComponent } from './dashboard-alumno/dashboard-alumno.component';
import { PreinscripcionesComponent } from './preinscripciones/preinscripciones.component';
import { CatalogoAlumnoComponent } from './catalogo-alumno/catalogo-alumno.component';
import { NavegacionAlumnoComponent } from './navegacion-alumno/navegacion-alumno.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [DashboardAlumnoComponent, PreinscripcionesComponent, CatalogoAlumnoComponent, NavegacionAlumnoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
