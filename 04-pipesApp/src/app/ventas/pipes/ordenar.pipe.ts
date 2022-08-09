import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = "sin valor"): Heroe[] {
    if (orderBy === 'sin valor')
      return heroes;
    else if (orderBy === 'vuela')
      return heroes.sort((h1,h2)=>( h1.vuela > h2.vuela ) ? 1 : -1);
    else if (orderBy === 'nombre')
      return heroes.sort((h1,h2)=>( h1.nombre > h2.nombre ) ? 1 : -1);
    else
      return heroes.sort((h1,h2)=>( h1.color > h2.color ) ? 1 : -1);
  }

}
