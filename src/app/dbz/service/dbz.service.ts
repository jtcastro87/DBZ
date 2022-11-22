import { Injectable } from "@angular/core";
import { Personaje } from "../interface/dbz.interface";

@Injectable()
export class DbzService{

  constructor(){}

  private _arrPersonajes:Personaje[] =[
    {
      nombre: 'Pikolo',
      poder: 12700
    },
    {
      nombre: 'Bulma',
      poder: 1
    }
  ]

  get getPersonajes():Personaje[]{
    return [...this._arrPersonajes]
  }

  addPersonajes(personaje:Personaje){

    this._arrPersonajes.push(personaje);
  }








}
