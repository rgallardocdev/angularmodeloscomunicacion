import { ChangeDetectorRef, Component, ElementRef, ViewChild  } from '@angular/core';
import { miCliente } from '../../models/cliente';

@Component({
  selector: 'app-clientes-component',
  standalone: false,
  styleUrl: './clientes-component.css',
  templateUrl: './clientes-component.html',
})
export class ClientesComponent {

  _datosCliente! : miCliente;
  _listadoClientes: miCliente[];

  @ViewChild ("idcliente") _idcliente!: ElementRef;
  @ViewChild ("selectIDCliente") _selectIDcliente!: ElementRef;

  constructor(public _cdr: ChangeDetectorRef){
    this._listadoClientes = [];
  }

  async ngOnInit(): Promise<void>{
    await this.cargarClientes();
  }

  async cargarClientes(): Promise<void>{
    let ruta = "documentos/clientesdatos.json";
    let respuesta = await fetch(ruta);
    let datos = await respuesta.json();
    console.log("cargar");
    console.log(datos);
    for(let cliente of datos){
      this._listadoClientes.push(new miCliente(cliente.idcliente, cliente.nombre, cliente.paginaweb, cliente.imagen));
    }
    this._cdr.detectChanges();
  }

  async buscarCliente(): Promise<void>{
    if (this._idcliente.nativeElement.value == ""){
      alert("Debe introducir un ID de cliente");
    }else {
      let ruta = "documentos/clientesdatos.json";
      let respuesta = await fetch(ruta);
      let datos = await respuesta.json();

      console.log(datos);

      for(let cliente of datos){
        if(cliente.idcliente == parseInt(this._idcliente.nativeElement.value)){
          this._datosCliente = new miCliente(cliente.idcliente, cliente.nombre, cliente.paginaweb, cliente.imagen);
        }
      }
    }
    this._cdr.detectChanges();    
  }

  async buscarClienteSelect(idclienteParametro: string): Promise<void>{
    let ruta = "documentos/clientesdatos.json";
    let respuesta = await fetch(ruta);
    let datos = await respuesta.json();

    for(let cliente of datos){
      if(cliente.idcliente == parseInt(idclienteParametro)){
        this._datosCliente = new miCliente(cliente.idcliente, cliente.nombre, cliente.paginaweb, cliente.imagen);
      }
    }
    this._cdr.detectChanges();    
  }
}
