import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte-component',
  standalone: false,
  styleUrl: './hijo-deporte-component.css',
  templateUrl: './hijo-deporte-component.html',
})
export class HijoDeporteComponent {
  @Input() sport!: string;
  @Output() miFavorito: EventEmitter<any> = new EventEmitter();

  mensajeLocal!:string;

  mostrarFavorito(): void{
     this.mensajeLocal = `has pulsado el boton del deporte: ${this.sport} `;
    this.miFavorito.emit(this.sport);
  }
}
