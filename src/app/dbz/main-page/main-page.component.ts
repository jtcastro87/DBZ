import { Component } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  constructor(private dbzService:DbzService){}

  nuevoPersonaje:Personaje={
    nombre: "",
    poder: 0

  }

  /*get personajes():Personaje[]{
    return this.dbzService.getPersonajes;

  }*/

 /* agregarPersonaje(personaje:Personaje){
    this.personajes.push(personaje);

  }*/






}
