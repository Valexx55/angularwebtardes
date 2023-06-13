import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { PerroWeb } from 'src/app/models/perro-web';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {

  perro: PerroWeb;

  observadorPerrosWeb:Observer<PerroWeb> =
  {
    complete: () => console.log("Complete"),
    error: (error_rx) => console.error(error_rx),
    next: (perro_rx:PerroWeb) => {

      console.log(` 
      PERRO RECIBIDO BIEN
      ${perro_rx.message}
      ${perro_rx.status}`);
      this.perro = perro_rx;//Actualizo el perro visible, con el perro recibido
    }
  };

  //inyección al estilo Angular @Autowired Spring
  //@Autowired
  //perroService:PerroService

  constructor(public perroService: PerroService, public rutas:Router) {
    console.log("EN EL CONSTRUCTOR DE PERROS");
    this.perro = new PerroWeb();
    this.perro.message = "assets/perro.jpg";//ruta local
    this.perro.status = "ok";
  }

  ngOnInit(): void {
  }

  damePerro(): void {
    //TODO: consumir el API web
    //usaremos el servicio
    this.perroService.getPerroAleatorio().subscribe(//this.observadorPerrosWeb);
      {
        complete: () => console.log("Complete"),
        error: (error_rx) => console.error(error_rx),
        next: (perro_rx) => {

          console.log(` 
          PERRO RECIBIDO BIEN
          ${perro_rx.message}
          ${perro_rx.status}`);
          this.perro = perro_rx;//Actualizo el perro visible, con el perro recibido
          
          let urlArray = perro_rx.message.split("/");
          this.perro.raza = urlArray[4];
        
        }
      }
    );

  }

}
