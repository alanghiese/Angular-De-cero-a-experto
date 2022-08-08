import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'alan';
  nombreUpper: string = 'ALAN';
  nombreCompleto: string = 'AlaN hiESe';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
