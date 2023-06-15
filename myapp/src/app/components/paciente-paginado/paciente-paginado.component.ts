import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { error } from 'console';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-paginado',
  templateUrl: './paciente-paginado.component.html',
  styleUrls: ['./paciente-paginado.component.css']
})
export class PacientePaginadoComponent implements OnInit {



  //que más clases me faltan
  //MODELO -> class interfaz PACIENTE
  //SERVICIO -> PARA pedir los datos al Server de Pacientes
  listaPacientes:Array<Paciente>;
  //datos/propiedades del paginator
  totalRegistros:number=0;
  totalPorPagina:number=2;//size
  opcionesTamanioPagina:number[]=[2, 4, 6, 8];
  paginaActual:number=0;//page

  
  
  constructor(public pacienteService:PacienteService)
  {
    this.listaPacientes = new Array<Paciente>();
  }

  


  ngOnInit(): void {
    this.getAlumnosPorPaginas();//en la primera llamada, nos carga la página 0 de tamaño 2
  }

  
  mostrarPacientes (lp:Array<Paciente>):void
  {
   
    lp.forEach(paciente=> 
      console.log(`${paciente.id} ${paciente.nombre}` ));
  }

  paginar (evento:PageEvent)
  {
    this.paginaActual=evento.pageIndex;
    this.totalPorPagina=evento.pageSize;

    this.getAlumnosPorPaginas();
  }


  getAlumnosPorPaginas ()
  {
    this.pacienteService.getPaginaPacientes(this.paginaActual, this.totalPorPagina).subscribe
    (
      {
        complete: () => console.log("Complete"),
        error: (error_rx) => console.error(error_rx),
        next: (respuesta) => {
          this.listaPacientes = <Array<Paciente>> respuesta.content;//casting
          this.totalRegistros = respuesta.totalElements;
        }
      }
    )
  }

}

