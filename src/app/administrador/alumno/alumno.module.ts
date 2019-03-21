import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoComponent } from './alumno/alumno.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [AlumnoComponent, PerfilComponent],
  imports: [
    CommonModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
