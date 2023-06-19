import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
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
  fotoSeleccionada!: File | null;

  observadorPostPaciente:Observer<Paciente> =
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
  };

  constructor(public pacienteService:PacienteService,
    public router:Router) {

    this.paciente = new PacienteClass();

   }

  ngOnInit(): void {
  }

  crearPaciente()
    {
    //TODO SUBIR EL PACIENTE NUEVO
    
    if (this.fotoSeleccionada!=null)
    {
      //si trae foto, llamo a postPacienteConFoto
      this.pacienteService.postPacienteConFoto (this.paciente, this.fotoSeleccionada).subscribe(this.observadorPostPaciente);
    } else {

      //si no, postPaciente
      this.pacienteService.postPaciente(this.paciente).subscribe(this.observadorPostPaciente);

    }
    
     

    }

    seleccionarFoto(evento:Event)
    {
      //event.target es elemento que recibe el evento
      let input_file:HTMLInputElement = <HTMLInputElement> evento.target;
      if (input_file!=null)
      {
        if (input_file.files!=null)
        {
            this.fotoSeleccionada = input_file.files[0];
            //comprobamos que lo que sube es una foto/imagen
            if (this.fotoSeleccionada.type.indexOf('image')>=0)
            {
              console.log("el archivo seleccionado por el usuario es una imagen");
            } else {
              this.fotoSeleccionada = null;
            }
        }
      }

    }

}
