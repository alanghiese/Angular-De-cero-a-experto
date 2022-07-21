import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

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
      this.paisService.buscarRegion(this.termino).subscribe({
      
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
