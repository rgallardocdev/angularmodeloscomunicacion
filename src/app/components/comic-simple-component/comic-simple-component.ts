import { Component } from '@angular/core';
import { miComic } from '../../models/comic';

@Component({
  selector: 'app-comic-simple-component',
  standalone: false,
  styleUrl: './comic-simple-component.css',
  templateUrl: './comic-simple-component.html',
})
export class ComicSimpleComponent {
  _comic : miComic;
  _arrayComics : miComic[];

  constructor() {
    this._arrayComics = [];
    this._comic = new miComic(
      'Spider-Man: No Way Home',
      'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png',
      'Peter Parker, with the help of Doctor Strange, tries to make his identity as Spider-Man a secret again after it was revealed in the previous film.'
    );
  }

  mostrarComic() {
    this._arrayComics = [new miComic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new miComic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new miComic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new miComic(
        "Avengers",
        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        "Los Vengadores"
      ),
      new miComic(
        "Spawn",
        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        "Todd MacFarlane"
      )]
  }

}
