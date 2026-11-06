import { ChangeDetectorRef, Component } from '@angular/core';
import { miPelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine-component',
  standalone: false,
  styleUrl: './cine-component.css',
  templateUrl: './cine-component.html',
})
export class CineComponent {

  arrayPeliculas: miPelicula[];

  constructor (private _cdr: ChangeDetectorRef){
    this.arrayPeliculas = [];
  }

  async ngOnInit(): Promise<void>{
    let ruta = "documentos/cine.json";
    let respuesta = await fetch(ruta);
    let datos = await respuesta.json();

    console.log(datos);

    let _pelicula : miPelicula;

    for(let peli of datos){
      _pelicula = new miPelicula(peli.Titulo,peli.Argumento,peli.Fecha_Estreno,peli.Director,peli.Duracion,peli.Youtube,peli.Genero,peli.Pais);
      this.arrayPeliculas.push(_pelicula);
    }

    this._cdr.detectChanges();    
  }
}
