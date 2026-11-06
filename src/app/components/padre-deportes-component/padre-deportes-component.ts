import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {

  arrayDeportes : string[];
  mensaje!:string;

  constructor() {
    this.arrayDeportes = ["Futbol ","Baloncesto","Natacion","Gimnasia","Tenis"];
  }

  mostrarFavorito(deporteElegido:string): void{
    this.mensaje = `Tu deporte favorito es: ${deporteElegido}`;
  }
}
