import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {}

  buscar(event:string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = event;

    if (this.termino != ''){
      this.paisService.buscarPais(this.termino).subscribe({
      
        next: (paises) => {
          this.paises=paises;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      });
    }
    
  }

  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    if (termino === ''){
      this.paisesSugeridos = [];
      return;
    }
    this.paisService.buscarPais(termino).subscribe({
      next: paises => {
        this.paisesSugeridos = paises.splice(0,5);
      },
      error: err =>{
        this.paisesSugeridos = [];
      }
    })
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
