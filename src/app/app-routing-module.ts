import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ComicSimpleComponent } from './components/comic-simple-component/comic-simple-component';
import { ComicJsonComponent } from './components/comic-json-component/comic-json-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';
import { ClientesComponent } from './components/clientes-component/clientes-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { CineComponent } from './components/cine-component/cine-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"comicsimple", component: ComicSimpleComponent},
  {path:"comicjson", component: ComicJsonComponent},
  {path:"jugadorjson", component: JugadoresComponent},
  {path:"clientejson", component: ClientesComponent},
  {path:"padredeportes", component: PadreDeportesComponent},
  {path:"libreriacomics", component: LibreriaComponent},
  {path:"padrenumeros", component: PadreNumerosComponent},
  {path:"cine", component: CineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
