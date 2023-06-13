import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  constructor() { }

  //que más clases me faltan
  //MODELO -> class interfaz PACIENTE
  //SERVICIO -> PARA pedir los datos al Server de Pacientes

  ngOnInit(): void {
  }

}
