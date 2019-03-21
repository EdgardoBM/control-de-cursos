import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnoComponent } from './alumno/alumno/alumno.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SedesComponent } from './sedes/sedes.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { NuevaPromoComponent } from './nueva-promo/nueva-promo.component';
import { NuevaSedeComponent } from './nueva-sede/nueva-sede.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'cursos', component: CursosComponent},
      {path: 'alumnos', component: AlumnoComponent},
      {path: 'promociones', component: PromocionesComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'sedes', component: SedesComponent},
      {path: 'nuevo-curso', component: NuevoCursoComponent},
      {path: 'nueva-promo', component: NuevaPromoComponent},
      {path: 'nueva-sede', component: NuevaSedeComponent},
      {path: 'nuevo-usuario', component: NuevoUsuarioComponent}
      // {path: '', component: },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
