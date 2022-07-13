import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  get historial():string[]{
    return this.gifService.historial
  }

  constructor(private gifService:GifService) {
    
  }

  ngOnInit(): void {
    
  }

  BuscarDelHistorial(parametro:string):void{
    this.gifService.obtenerGifs(parametro)
  }



}
