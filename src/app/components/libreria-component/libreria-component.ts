import { ChangeDetectorRef, Component } from '@angular/core';
import { miComic } from '../../models/comic';

@Component({
  selector: 'app-libreria-component',
  standalone: false,
  styleUrl: './libreria-component.css',
  templateUrl: './libreria-component.html',
})
export class LibreriaComponent {

  arrayComics! : miComic [];

  constructor(private _cdr: ChangeDetectorRef) {
  }

  async ngOnInit(): Promise<void> {
    const ruta = "documentos/comics.json";
    const respuesta = await fetch(ruta);
    const datos = await respuesta.json();

    this.arrayComics = [];

    console.log(datos);

    let _comic : miComic;

    for(let comic of datos ){
      _comic = new miComic(comic.titulo,comic.imagen,comic.descripcion);
      this.arrayComics.push(_comic);
    }

    this._cdr.detectChanges();    
  }
}
