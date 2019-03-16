import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { DashboardAlumnoComponent } from './dashboard-alumno/dashboard-alumno.component';
import { PreinscripcionesComponent } from './preinscripciones/preinscripciones.component';
import { CatalogoAlumnoComponent } from './catalogo-alumno/catalogo-alumno.component';

@NgModule({
  declarations: [DashboardAlumnoComponent, PreinscripcionesComponent, CatalogoAlumnoComponent],
  imports: [
    CommonModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
