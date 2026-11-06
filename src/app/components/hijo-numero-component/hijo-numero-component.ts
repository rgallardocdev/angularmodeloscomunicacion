import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numero-component',
  standalone: false,
  styleUrl: './hijo-numero-component.css',
  templateUrl: './hijo-numero-component.html',
})
export class HijoNumeroComponent implements OnInit {
  @Input() miNumero!: number;
  @Output() objPadre: EventEmitter<any> = new EventEmitter();

  doble!: number;

  ngOnInit(): void {
    this.doble = this.miNumero * 2;
  }

  enviarNumero(): void {
    this.objPadre.emit(this.miNumero);
  }

}
