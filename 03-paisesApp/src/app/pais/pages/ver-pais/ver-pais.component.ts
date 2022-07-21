import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    // .subscribe({
    //   next: ( {id} ) => {
    //     console.log(id);
    //     this.paisService.buscarPaisByCod(id).subscribe({
    //       next: (r) => {
    //         console.log(r);
    //       }
    //     });
    //   }
    // })

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.buscarPaisByCod(id)),
        tap(console.log)
      )
      .subscribe({
        next: (r) => {
          this.pais = r[0]; 
        }
      })
  }

}
