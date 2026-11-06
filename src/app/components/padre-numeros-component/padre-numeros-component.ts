import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {

  arrayNumeros: number[];

  sumaTotal: number;

  @ViewChild("cajaNumero") cajaNumero!: ElementRef; 

  constructor() {
    this.arrayNumeros = [5,6,8];
    this.sumaTotal = 0;
  }

  agregarNumero(): void {
    this.arrayNumeros.push(parseInt(this.cajaNumero.nativeElement.value));
  }

  sumarNumeros(elNumero: number): void {
    this.sumaTotal = this.sumaTotal + elNumero;
  }

}
