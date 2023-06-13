import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerroWeb } from '../models/perro-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

  /**
   * AQUÍ VA LA FUNCIONALIDAD AJAX
   * HABLAR CON EL SERVIDOR WEB
   */

  static readonly WEB_API_PERROS:string = "https://dog.ceo/api/breeds/image/random";


  constructor(private httpCliente:HttpClient) { }

  //pedirPerro

  getPerroAleatorio ():Observable<PerroWeb>
  {
    return this.httpCliente.get<PerroWeb>(PerroService.WEB_API_PERROS);
  }

  getPerroAleatorioConCabecera ():Observable<HttpResponse<PerroWeb>>
  {
    return this.httpCliente.get<PerroWeb>(PerroService.WEB_API_PERROS, {observe:'response'});
  }
}
