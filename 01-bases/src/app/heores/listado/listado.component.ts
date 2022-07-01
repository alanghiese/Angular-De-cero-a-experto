import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
    heroes: string[] =  ['Ironman','Spiderman','Hulk'];
    heroesBorrados: string[] = [];


    borrarHeroe(){
      if (this.heroes.length>0) {
        let heroeBorrado:string = this.heroes.shift()|| "";  
        this.heroesBorrados.push(heroeBorrado);
      }
      
    }

    agregarHeroe(){
      if (this.heroesBorrados.length>0) {
        let heroeBorrado:string = this.heroesBorrados.shift() || "";  
        this.heroes.push(heroeBorrado);
      }
      
    }

}