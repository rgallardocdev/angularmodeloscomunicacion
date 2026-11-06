import { Component, Input } from '@angular/core';
import { miPelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-component',
  standalone: false,
  styleUrl: './pelicula-component.css',
  templateUrl: './pelicula-component.html',
})
export class PeliculaComponent {
  @Input() pelicula!: miPelicula;
}
