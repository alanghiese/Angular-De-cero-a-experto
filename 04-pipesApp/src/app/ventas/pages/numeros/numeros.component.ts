import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNeta: number = 264846446.5598;
  porcentaje: number = 0.4820;

  constructor() { }

  ngOnInit(): void {
  }

}
