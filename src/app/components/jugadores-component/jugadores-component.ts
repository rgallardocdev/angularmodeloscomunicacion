import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miJugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class JugadoresComponent implements OnInit {

  _arrayJugadores : miJugador[];

  constructor(private _cdr: ChangeDetectorRef) {
    this._arrayJugadores = [];
   }

   async ngOnInit(): Promise<void> {
    await this.cargarJugadores();
   }

   async cargarJugadores(): Promise<void> {
    const ruta = "documentos/jugadores.json";
    const respuesta = await fetch(ruta);
    const datos = await respuesta.json();

    this._arrayJugadores = [];

    let _jugador : miJugador;
    for (let jugador of datos){
      _jugador = new miJugador(jugador.jugador, jugador.imagen);
      this._arrayJugadores.push(_jugador);
    }
    this._cdr.detectChanges();
   }
}
