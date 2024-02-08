import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Componente AppComponent</h1>
    <h2> Nuestra aplicación se llama {{ title }}</h2>
    <h3>Counter: {{ counter }}</h3>
    <input type="button" value="+1" (click)="incrementar()">
    <input type="button" value="Reset" (click)="reset()">
    <input type="button" value="-1" (click)="decrementar()">
  `,
  styles: ``
})
export class CounterComponent {
  private _title: string = 'Bases';
  public get title(): string {
    return this._title;
  }
  private _counter: number = 10;
  public get counter(): number {
    return this._counter;
  }

  incrementar(): void {
    this._counter++;
  }
  decrementar(): void {
    this._counter--;
  }
  reset(): void {
    this._counter = 10;
  }
}
