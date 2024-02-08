import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title: string = 'proyecto_angular16';

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
}