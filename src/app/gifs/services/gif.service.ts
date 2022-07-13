import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private urlApi:string ="http://api.giphy.com/v1/gifs"
  private _apiKey:string ="DK55IhSC0YtnXKhhVkh6RPA1KxkN93AO";

  private _historial:string[]=[]

  public resultados:Gif[]=[]

  get historial(){  
    return [...this._historial];
  }

  constructor(private http : HttpClient) {
    let historialLocal:string[] = localStorage.getItem('historial') ? JSON.parse(localStorage.getItem('historial') as any) : this._historial;
    let resultadosLocal:Gif[] = localStorage.getItem('resultados') ? JSON.parse(localStorage.getItem('resultados') as any) : this.resultados;
    this._historial = historialLocal;
    this.resultados = resultadosLocal;
    console.log(this.resultados)
    console.log(this._historial)
   }

  guardarHistorial(query:string = ""):void{
     
    query = query.trim().toLocaleLowerCase();
     if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
     }

     this.obtenerGifs(query,10);    
     
    console.log(this._historial);
  }

  obtenerGifs(query:string, limit:number=10):void{
    const params = new HttpParams()
    .set('api_key',this._apiKey)
    .set('limit',limit)
    .set('q',query)

    console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${this.urlApi}/search`,{params})
     .subscribe((resp)=>{
      this.resultados=resp.data;
      localStorage.setItem('resultados',JSON.stringify(resp.data));
      console.log(resp)
     })
  }
}
