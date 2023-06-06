import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//"etiqueta <app-root></app-root>"
  templateUrl: './app.component.html',//html dentro del app-root
  styleUrls: ['./app.component.css']//estilo
})
export class AppComponent {
  //EL CUERPO DE LA CLASE, ES EL JAVASCRIPT
  title:string = 'myapp';


  constructor()
  {
    console.log("SE HA CREADO UN OBJETO DE APPCOMPONENT");
  }

}
