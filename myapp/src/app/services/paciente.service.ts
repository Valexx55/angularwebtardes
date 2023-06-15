import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';
import { PacienteClass } from '../models/paciente-class';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {



    /**
   * AQUÍ VA LA FUNCIONALIDAD AJAX
   * HABLAR CON EL SERVIDOR WEB
   */

    static readonly GET_WEB_API_PACIENTES:string = "http://localhost:8081/paciente";
    static readonly GET_PAGINA_WEB_API_PACIENTES:string ="http://localhost:8081/paciente/pagina";//http://localhost:8081/paciente/pagina?page=0&size=3
    static readonly POST_WEB_API_PACIENTES:string = "http://localhost:8081/paciente";

    cabeceras: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});


    constructor(private httpCliente:HttpClient) { }
  
    //pedirPerro
  
    getAllPacientes ():Observable<Array<Paciente>>
    {
      return this.httpCliente.get<Array<Paciente>>(PacienteService.GET_WEB_API_PACIENTES);
    }

    getPaginaPacientes (page:number, size:number):Observable<any>
    {
      let parametros: HttpParams = new HttpParams().set('page', page).set('size', size);
      return this.httpCliente.get<any>(PacienteService.GET_PAGINA_WEB_API_PACIENTES, {params:parametros});
    }

    postPaciente (paciente:PacienteClass):Observable<Paciente>
    {
      return this.httpCliente.post<Paciente>(PacienteService.POST_WEB_API_PACIENTES,paciente, {headers:this.cabeceras});
    }
}
