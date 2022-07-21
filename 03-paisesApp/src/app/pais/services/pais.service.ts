import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';
  private _filter: string = 'name,capital,population,cca2,flags'

  get httpParams(): HttpParams {
    return new HttpParams().set('fields',this._filter)
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    
    const url = this._apiUrl + "/name/" + termino;       
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = this._apiUrl + "/capital/" + termino;       
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = this._apiUrl + "/region/" + termino;       
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  buscarPaisByCod(termino: string): Observable<Country> {
    const url = this._apiUrl + "/alpha/" + termino;       
    return this.http.get<Country>(url);
  }

}
