import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SedesComponent } from './sedes/sedes.component';
import { NuevaSedeComponent } from './nueva-sede/nueva-sede.component';
import { NuevaPromoComponent } from './nueva-promo/nueva-promo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { CursosComponent } from './cursos/cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';

const routes: Routes = [

  {
    path:'alumno',
    loadChildren: './alumno/alumno.module#AlumnoModule'
  },
  {
    path: 'nav-var',
    component: NavBarComponent
  },
  {
    path: 'pie-pagina',
    component: PiePaginaComponent
  },
  {
    path: 'promociones',
    component: PromocionesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
  ,
  {
    path: 'sedes',
    component: SedesComponent
  },
  {
    path: 'nueva-sede',
    component: NuevaSedeComponent
  },
  {
    path: 'nueva-promo',
    component: NuevaPromoComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'nuevo-usuario',
    component: NuevoUsuarioComponent  
  },
  {
    path: 'cursos',
    component: CursosComponent 
  },
  {
    path: 'nuevo-curso',
    component: NuevoCursoComponent 
  }
  /*,
  {
    path:'administrador',
    loadChildren: './administrador/administrador.module#AdministradorModule'
  },
  {
    path:'login',
    loadChildren: './login/login.module#LoginModule'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
