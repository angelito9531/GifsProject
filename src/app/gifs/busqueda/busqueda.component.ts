import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
@ViewChild('inputBuscar') inputBuscar!:ElementRef<HTMLInputElement>

  constructor(private gifservice:GifService){    
  }

  Buscar():void{
    let text = this.inputBuscar.nativeElement.value;
    this.gifservice.guardarHistorial(text); 
    this.LimparText();
  }
  LimparText():void{
    this.inputBuscar.nativeElement.value ="";
  }
}
