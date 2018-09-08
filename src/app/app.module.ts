import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoService } from './services/equipo.service';
import { EquipoComponent } from './equipo/equipo.component';


const routes:Routes=[
  {path:"",component: InicioComponent},
  {path:"inicio", component: InicioComponent},
  {path:"acerca", component: AcercaComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"equipo/:id", component: EquipoComponent},
  {path:"**", redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    InicioComponent,
    AcercaComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
