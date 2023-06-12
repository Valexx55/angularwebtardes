import { Component, OnInit } from '@angular/core';
import { PerroWeb } from 'src/app/models/perro-web';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {

  perro:PerroWeb;

  //inyección al estilo Angular @Autowired Spring
  constructor(public perroService:PerroService) { 
    console.log("EN EL CONSTRUCTOR DE PERROS");
    this.perro = new PerroWeb();
    this.perro.message = "assets/perro.jpg";//ruta local
    this.perro.status="ok";
  }

  ngOnInit(): void {
  }

  damePerro():void
  {
    //TODO: consumir el API web
    //usaremos el servicio
    this.perroService.getPerroAleatorio();

  }

}
