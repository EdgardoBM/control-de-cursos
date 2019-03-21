import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [

  {
    path:'',
    component: AlumnoComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
