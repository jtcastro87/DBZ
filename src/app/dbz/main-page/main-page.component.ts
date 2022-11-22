import { Component } from '@angular/core';
import { personajes } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

    arrPersonajes:personajes[] =[
    {
      nombre: 'Pikolo',
      poder: 12700
    },
    {
      nombre: 'Bulma',
      poder: 1
    }
  ]

  nuevoPersonaje:personajes={
    nombre: "",
    poder: 0
  }

  agregarPersonaje(personaje:personajes){
    this.arrPersonajes.push(personaje);
  }





}
