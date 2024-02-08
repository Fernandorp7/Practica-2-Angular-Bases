import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["Antonio Recio", "Amador Rivas", 
  "Enrique Pastor", "Coque Calatrava", "Maite Figueroa"];
  public heroeBorrado?: string ='';

  borrarUltimoHeroe(): void{
    if (this.heroNames.length > 0) {
      this.heroeBorrado = String (this.heroNames.pop());
    } else {
      this.heroeBorrado='no hay más';
    }
  }
}
