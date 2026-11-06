import { Component, Input } from '@angular/core';
import { miComic } from '../../models/comic';

@Component({
  selector: 'app-comic-component',
  standalone: false,
  styleUrl: './comic-component.css',
  templateUrl: './comic-component.html',
})
export class ComicComponent {
  @Input() titulo!: string;
  @Input() descripcion!: string;
  @Input() comic!: miComic;
}
