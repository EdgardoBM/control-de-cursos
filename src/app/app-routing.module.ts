import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';


const routes: Routes = [
  {path: '', loadChildren: './usuario-general/usuario-general.module#UsuarioGeneralModule'},
  {path: 'alumno', loadChildren: './alumno/alumno.module#AlumnoModule'},
  {path: 'marketer', loadChildren: './marketer/marketer.module#MarketerModule'},
  {path: 'administrador', loadChildren: './administrador/administrador.module#AdministradorModule'},
  {path: '**', component: NoEncontradoComponent}//PAGINA DE LINK NO ENCONTRADO

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
