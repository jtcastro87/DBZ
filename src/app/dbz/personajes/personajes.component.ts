import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  constructor(private dbzService:DbzService){}

  //@Input() personajesChild:personajes[] = [];

  get listaPersonajes() {
      return this.dbzService.getPersonajes;
  }

}
