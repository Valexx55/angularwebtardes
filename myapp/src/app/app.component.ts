import { AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',//"etiqueta <app-root></app-root>"
  templateUrl: './app.component.html',//html dentro del app-root
  styleUrls: ['./app.component.css']//estilo
})
export class AppComponent  implements OnInit, AfterViewInit, OnDestroy {
  //EL CUERPO DE LA CLASE, ES EL JAVASCRIPT
  title:string = 'myapp';


  constructor()
  {
    console.log(" constructor() SE HA CREADO UN OBJETO DE APPCOMPONENT");
    this.title = "MI APLICACIÓN!"; //inicializo este dato 
    this.saludo();
  }

  saludo () : void{
    console.log("HOLA ESTOY en saludo :) y mi título es " + this.title);
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("ngOnInit() SE HA CREADO UN OBJETO DE APPCOMPONENT");
  }

  ngAfterViewInit(): void {
    console.log("  ngAfterViewInit() SE HA CARGADO EL HTML! / la plantilla asociada");
  }

  ngOnDestroy(): void {
    console.log("  ngOnDestroy() EL COMPONENTE DEJA DE SER VISIBLE");
  }

  
  /**
   * VAMOS A HACER UNA PÁGINA/APP
   * DE NUMEROS
   * DE PERROS WEB
   * DE DNI
   * DE PACIENTES 
   */


  
}
