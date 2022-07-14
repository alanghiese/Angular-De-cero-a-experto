import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {


  constructor(
              private _gifsService: GifsService
  ) {}

  get historial(): string[]{
    return this._gifsService.historial;
  }

  ngOnInit(): void {
  }

  buscar(busqueda: string){
    this._gifsService.buscarGifs(busqueda);
  }

}
