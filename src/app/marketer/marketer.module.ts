import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketerRoutingModule } from './marketer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EventoDetalleComponent } from './evento-detalle/evento-detalle.component';
import { EventosMarketerComponent } from './eventos-marketer/eventos-marketer.component';
import { NavBarMarketerComponent } from './nav-bar-marketer/nav-bar-marketer.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { PromocionesDetallesComponent } from './promociones-detalles/promociones-detalles.component';

@NgModule({
  declarations: [EventoDetalleComponent, EventosMarketerComponent, NavBarMarketerComponent, PromocionesComponent, PromocionesDetallesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MDBBootstrapModule,
    MarketerRoutingModule
  ]
})
export class MarketerModule { }
