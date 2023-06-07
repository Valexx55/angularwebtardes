import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit, OnDestroy {


  titulo:string;//atributo de la clase
  valor:number | null; //UNION TYPE una variable puede ser de varios tipos

  static readonly SECUENCIA_LETRAS_DNI:string = "TRWAGMYFPDXBNJZSQVHLCKE";
  letra:string; //letra!:string;//! operador relaja la restricción de inicializar el atributo

  constructor() { 
    //inicializamos
    this.titulo="CALCULO LETRA DNI";
    this.valor= null;
    this.letra='';
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy DniComponent")
  }

  ngOnInit(): void {
  }

  calcularLetraDni() : void
  {
    console.log("Botón Calcular Tocado");
    console.log( `VALOR INTRO  ${this.valor}`);//plantilla para concatenar literales
    //¿qué radio está seleccionado? -- me quedo con el checked de nombre prefijo
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    //let inputSeleccionado : HTMLInputElement = document.querySelector(' [name="prefijo"]:checked') as HTMLInputElement;
    console.log("VALOR XYZ " + inputSeleccionado.value);
    
    if (this.valor!=null) //UNION TYPE si ya es un número...me meto
    {
      //sea dni español
    if (inputSeleccionado.value!="sin")
    {
      //dni extranjero
      //'035' X
      //'135' Y
      //'235' Z
      let numeroString:string = inputSeleccionado.value + this.valor;
      let numero:number = parseInt(numeroString);
      let resto:number =  numero%DniComponent.SECUENCIA_LETRAS_DNI.length;
      this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);


    } else {
      //dni español
      //número % 23 --> posicion
      let resto:number =  this.valor%DniComponent.SECUENCIA_LETRAS_DNI.length;
      //posicion de SECUENCIA_LETRAS_DNI
      this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
      

    }
    console.log("Letra DNI ESP = "+ this.letra );
    //no

    }
    

  }

  dameEstilo(): string{
    let estilo:string = '';

    if(this.valor != null && this.valor % 2 == 0){ 
      //es par
      estilo = 'border border-primary';
    }else{ 
      // es impar o null
      estilo = 'border border-danger';
    }
    return estilo;
  }

}
