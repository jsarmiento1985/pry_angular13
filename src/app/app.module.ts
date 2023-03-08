import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MateriasComponent} from './materias/materias.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { AulasComponent } from './aulas/aulas.component';
import { HomeComponent } from './home/home.component';
import { PaginanoexisteComponent } from './paginanoexiste/paginanoexiste.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    DepartamentosComponent,
    AulasComponent,
    HomeComponent,
    PaginanoexisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
