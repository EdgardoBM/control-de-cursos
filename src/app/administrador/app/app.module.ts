import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './shared/material/material.module';
import { SedesComponent } from './sedes/sedes.component';
import { NuevaSedeComponent } from './nueva-sede/nueva-sede.component';
import { CursosComponent } from './cursos/cursos.component';
import { NuevaPromoComponent } from './nueva-promo/nueva-promo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';

//import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PiePaginaComponent,
    PromocionesComponent,
    DashboardComponent,
    SedesComponent,
    NuevaSedeComponent,
    CursosComponent,
    NuevaPromoComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    NuevoCursoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
