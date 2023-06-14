import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  

  //que más clases me faltan
  //MODELO -> class interfaz PACIENTE
  //SERVICIO -> PARA pedir los datos al Server de Pacientes
  listaPacientes:Array<Paciente>;

  
  
  constructor(public pacienteService:PacienteService)
  {
    this.listaPacientes = new Array<Paciente>();
  }

  


  ngOnInit(): void {
    this.pacienteService.getAllPacientes().subscribe(
      {
        complete: () => console.log("Complete"),
        error: (error_rx) => console.error(error_rx),
        next: (lp) => {
          this.listaPacientes = lp;
          this.mostrarPacientes(lp);
        }
        //next: this.mostrarPacientes //Al usar una función con nombre, el ámbito del this cambia y no representa más al componente.
        //Con lo que no puedo invocar las funciones o propiedades del Componente
      }
    );
  }

  mostrarPacientes (lp:Array<Paciente>):void
  {
    this.saludo();
    lp.forEach(paciente=> 
      console.log(`${paciente.id} ${paciente.nombre}` ));
  }

  saludo ()
  {
    console.log("HOLA");
  }

}
