import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent implements OnInit {

  constructor(private _gifsService: GifsService) { }

  get resultados(){
    return this._gifsService.resultados;
  }

  ngOnInit(): void {
  }

}
