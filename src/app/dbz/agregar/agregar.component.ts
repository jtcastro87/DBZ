import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personajes } from '../interface/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevoPersonaje:personajes={
    nombre: "",
    poder: 0
  }

  @Output() onNuevoPersonaje:EventEmitter<personajes> = new EventEmitter();

  agregar():void {

    if(this.nuevoPersonaje.nombre.trim().length === 0)
      return;

    this.onNuevoPersonaje.emit(this.nuevoPersonaje)

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }

 }

}
