import { Component, Input } from '@angular/core';
import { personajes } from '../interface/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  @Input()
  personajesChild:personajes[] = [];

}
