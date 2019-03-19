import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarMarketerComponent } from './nav-bar-marketer/nav-bar-marketer.component';
import { EventosMarketerComponent } from './eventos-marketer/eventos-marketer.component';
import { NavbarComponent } from 'angular-bootstrap-md';
import { EventoDetalleComponent } from './evento-detalle/evento-detalle.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { PromocionesDetallesComponent } from './promociones-detalles/promociones-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarMarketerComponent,
    children:[
      { path: 'eventos', component: EventosMarketerComponent },
      { path: 'todo', component: NavbarComponent },
      { path: 'detalleEventos', component: EventoDetalleComponent },
      { path: 'promociones' , component: PromocionesComponent},
      { path: 'detallePromociones' , component: PromocionesDetallesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketerRoutingModule { }
