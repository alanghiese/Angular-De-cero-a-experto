import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Alan';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['Maria','Alan','Juan','Pedro','Jimena','Marcos'];
  // clientes: string[] = ['Maria'];
  // clientes: string[] = [];

  

  clientesMapa = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Actualmente tenemos un cliente esperando.',
    'other': 'Actualmente tenemos # clientes esperando'
  }

  //keyvalue pipe
  persona = {
    nombre: 'Alan',
    edad: 29,
    ciudad: 'Tandil'
  }

  //json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    if ( this.nombre === 'Alan' ){
      this.nombre = 'Maria';
      this.genero = 'femenino';
    }
    else{
      this.nombre = 'Alan';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){
    this.clientes.shift();
  }

  //async pipe
  miObservable = interval(1000); // 0,1,2,3,4,....n

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' )
    }, 3500);
  })

}
