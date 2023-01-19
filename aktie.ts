import { Gegenstand } from './gegenstand';

export class aktie extends Gegenstand {
  constructor(
    public id: number,
    public wert: number,
    public unternehmen: String,
    public nennwert: number
  ) {
    super(id, wert);
  }

  toString(): string {
    let text: string = '\nUnternehmen: ' + this.unternehmen;
    text += super.toString();
    return text;
  }
}
