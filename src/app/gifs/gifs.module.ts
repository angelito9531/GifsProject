import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListaGifsComponent } from './lista-gifs/lista-gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ListaGifsComponent
  ],
  exports:[GifsPageComponent],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
