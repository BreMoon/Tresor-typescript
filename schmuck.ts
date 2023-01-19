import { Gegenstand } from './gegenstand'; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {
  constructor (public id: number,public wert: number, public bezeichnung: String){
    super(id, wert)
  }
}

//todo
