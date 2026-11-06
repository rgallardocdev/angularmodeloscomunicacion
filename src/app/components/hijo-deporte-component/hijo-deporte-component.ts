import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte-component',
  standalone: false,
  styleUrl: './hijo-deporte-component.css',
  templateUrl: './hijo-deporte-component.html',
})
export class HijoDeporteComponent {
  @Input() sport!: string;
  @Output() objPadre: EventEmitter<any> = new EventEmitter();

  mensajeLocal!:string;

  enviarFavorito(): void{
     this.mensajeLocal = `has pulsado el boton del deporte: ${this.sport} `;
    this.objPadre.emit(this.sport);
  }
}
