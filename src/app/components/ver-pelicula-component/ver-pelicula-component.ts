import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ver-pelicula-component',
  standalone: false,
  styleUrl: './ver-pelicula-component.css',
  templateUrl: './ver-pelicula-component.html',
})
export class VerPeliculaComponent {
  @Input() urlPelicula!: string;
}
