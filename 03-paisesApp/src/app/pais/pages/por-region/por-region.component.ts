import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    if (this.regionActiva !== region) {
      this.regionActiva = region;
      this.paises = [];
      this.buscar(this.regionActiva);
    }

  }

  buscar(event: string) {
    this.hayError = false;
    this.termino = event;

    if (this.termino != '') {
      this.paisService.buscarRegion(this.termino).subscribe({

        next: (paises) => {
          this.paises = paises
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      });
    }



  }

  getClasCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}
