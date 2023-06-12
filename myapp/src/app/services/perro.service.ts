import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getPerroAleatorio ()
  {
     //this.httpCliente.
  }
}
