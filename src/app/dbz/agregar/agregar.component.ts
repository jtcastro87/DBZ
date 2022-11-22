import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor( private dbzService:DbzService ){}

  @Input() nuevoPersonaje:Personaje={
    nombre: "",
    poder: 0
  }

  //@Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  agregar():void {

    if(this.nuevoPersonaje.nombre.trim().length === 0)
      return;

    //this.onNuevoPersonaje.emit(this.nuevoPersonaje)
    this.dbzService.addPersonajes(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }

 }

}
