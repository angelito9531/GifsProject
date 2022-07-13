import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-lista-gifs',
  templateUrl: './lista-gifs.component.html',
  styleUrls: ['./lista-gifs.component.css']
})
export class ListaGifsComponent implements OnInit {

  get resultados(){
    return this.serviceGif.resultados;
  }

  constructor(private serviceGif:GifService) { }

  ngOnInit(): void {
  } 

}
