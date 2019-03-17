import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavegacionAlumnoComponent } from './navegacion-alumno/navegacion-alumno.component';
import { DashboardAlumnoComponent } from './dashboard-alumno/dashboard-alumno.component';
import { CatalogoAlumnoComponent } from './catalogo-alumno/catalogo-alumno.component';
import { PreinscripcionesComponent } from './preinscripciones/preinscripciones.component';

const routes: Routes = [
  {
    path: '',
    component: NavegacionAlumnoComponent,
    children:[
      {path: '', component: DashboardAlumnoComponent},
      {path: 'catalogo-alumno', component: CatalogoAlumnoComponent},
      {path: 'preinscripciones', component: PreinscripcionesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
