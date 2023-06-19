import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteClass } from 'src/app/models/paciente-class';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.css']
})
export class FormularioPacienteComponent implements OnInit {

  paciente!:PacienteClass;

  constructor(public pacienteService:PacienteService,
    public router:Router) {

    this.paciente = new PacienteClass();

   }

  ngOnInit(): void {
  }

  crearPaciente()
    {
    //TODO SUBIR EL PACIENTE NUEVO
      this.pacienteService.postPaciente(this.paciente).subscribe
      (
        {
          complete: () => console.log("Complete"),
          error: (error_rx) => {console.error(error_rx);
            alert('Error al insertar el paciente');},
          next: (pacienteNuevo) => {
            console.log("se ha creado un paciente nuevo " + 
            pacienteNuevo.id);
            alert('Paciente Insertado Correctamente');
            //navegar al listado
            this.router.navigateByUrl("/paciente");
          }
          //next: this.mostrarPacientes //Al usar una función con nombre, el ámbito del this cambia y no representa más al componente.
          //Con lo que no puedo invocar las funciones o propiedades del Componente
        }
      )

    }

    seleccionarFoto(evento:Event)
    {

    }

}
