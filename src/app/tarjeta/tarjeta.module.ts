import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { TarjetaComponent } from './tarjeta.component';


@NgModule({
  declarations: [
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    TarjetaRoutingModule
  ]
})
export class TarjetaModule { }
