import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {



    /**
   * AQUÍ VA LA FUNCIONALIDAD AJAX
   * HABLAR CON EL SERVIDOR WEB
   */

    static readonly GET_WEB_API_PACIENTES:string = "http://localhost:8081/paciente";


    constructor(private httpCliente:HttpClient) { }
  
    //pedirPerro
  
    getAllPacientes ():Observable<Array<Paciente>>
    {
      return this.httpCliente.get<Array<Paciente>>(PacienteService.GET_WEB_API_PACIENTES);
    }
}
