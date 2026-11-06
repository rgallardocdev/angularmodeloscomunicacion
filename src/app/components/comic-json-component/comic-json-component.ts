import { ChangeDetectorRef, Component } from '@angular/core';
import { miComic } from '../../models/comic';

@Component({
  selector: 'app-comic-json-component',
  standalone: false,
  styleUrl: './comic-json-component.css',
  templateUrl: './comic-json-component.html',
})
export class ComicJsonComponent {
  _arrayComics : miComic [];

  constructor(private _cdr: ChangeDetectorRef) {
    this._arrayComics = [];
  }

  async cargarComics(): Promise<void> {
    const ruta = "documentos/comics.json";
    const respuesta = await fetch(ruta);
    const datos = await respuesta.json();

    this._arrayComics = [];

    console.log(datos);

    let _comic : miComic;

    for(let comic of datos ){
      _comic = new miComic(comic.titulo,comic.imagen,comic.descripcion);
      this._arrayComics.push(_comic);
    }

    this._cdr.detectChanges();
  }
}
