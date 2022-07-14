import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private _http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  buscarGifs(query: string) {
    
    if (query.trim().length > 0 && !this._historial.includes(query.trim().toLowerCase())) {
      this._historial.unshift(query.trim().toLowerCase());
      this._historial = this._historial.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params:HttpParams = new HttpParams()
    .set('api_key',environment.GhipyAPIKey)
    .set('limit','10')
    .set('q', query);

    this._http.get<SearchGifsResponse>(environment.GhipyUrl+environment.GhipySearchEndpoint, {params: params})//se puede poner solo params porque tienen el mismo nombre la variable y el parametro
      .subscribe((response) => {
        this.resultados = response.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      })
  }

}
