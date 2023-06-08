import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortaleza',
  templateUrl: './fortaleza.component.html',
  styleUrls: ['./fortaleza.component.css']
})
export class FortalezaComponent implements OnInit {


  titulo: string = "APP PARA MEDIR LA FORTALEZA DE SU CONTRASEÑA";

  passUsuario!: string | null;
  
  nivel:number=0;

  mensajeFuerte: string = "CONTRASEÑA FUERTE";
  mensajeMedia: string = "CONTRASEÑA MEDIA";
  mensajeDebil: string = "CONTRASEÑA DÉBIL";
  // static readonly MENSAJE_PWD_MEDIA:string ="CONTRASEÑA MEDIA";
  //static readonly MENSAJE_PWD_BAJA:string ="CONTRASEÑA DÉBIL";

  constructor() {
  }



  ngOnInit(): void {
  }

  /**
   * 
   * @returns 0 si la fortaleza es baja 1 si es media 2 si es alta -1 si no ha metido nada
   */
  evaluarFortaleza(): number {
    let tfortaleza: number = -1;

      if (this.passUsuario!=null)
      {
        if (this.passUsuario.length<=5)
          tfortaleza=0;//BAJA
        else if ((this.passUsuario.length>5)&&(/[0-9]/.test(this.passUsuario)))
          {
            tfortaleza=2;//ALTA

          } else {
            tfortaleza=1;//MEDIA
          }
      }

    return tfortaleza;

  }

  estiloInputFortaleza() :string {
    let estilo: string = "";

    this.nivel=this.evaluarFortaleza();
    switch (this.evaluarFortaleza()) {
      case 0:
        estilo = "form-control border border-danger border-5";
        break;

      case 1:
        estilo = "form-control border border-warning border-5";
        break;
      case 2:
        estilo = "form-control border border-success border-5";
        break;
      default:
        estilo = "form-control";
    }

    return estilo;

  }

}
