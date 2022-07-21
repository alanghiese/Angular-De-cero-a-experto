import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  
  buscar(event:string){
    this.hayError = false;
    this.termino = event;

    if (this.termino != ''){
      this.paisService.buscarCapital(this.termino).subscribe({
      
        next: (paises) => {
          this.paises=paises
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      });
    }
    
  }

  sugerencias(termino: string){
    this.hayError = false;
  }

}
