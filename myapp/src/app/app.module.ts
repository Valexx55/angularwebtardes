import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NumerosComponent } from './components/numeros/numeros.component';
import { PerrosComponent } from './components/perros/perros.component';
import { DniComponent } from './components/dni/dni.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { FortalezaComponent } from './components/fortaleza/fortaleza.component';
import { FormularioPacienteComponent } from './components/formulario-paciente/formulario-paciente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PacientePaginadoComponent } from './components/paciente-paginado/paciente-paginado.component';


@NgModule({
  declarations: [
    AppComponent,
    NumerosComponent,
    PerrosComponent,
    DniComponent,
    PacienteComponent,
    FortalezaComponent,
    FormularioPacienteComponent,
    PacientePaginadoComponent //se declaran/registran todos los componentes que trae este módulo
  ],
  imports: [
    BrowserModule,//MÓDULO, hace compatible mi app Angular con distintos Navegadores
    AppRoutingModule,//Módulo para la navegación entre Componentes (etiquetas)
    FormsModule,//este módulo, trae una serie de "herramientas" para trabajar con Formularios en Angular
    HttpClientModule, BrowserAnimationsModule,
    MatPaginatorModule //este modulo engloba el cliente http "AJAX" para comunicar nuestra app con servidores web (java)
  ],
  providers: [],
  bootstrap: [AppComponent]//página de inicio/componente inicial
})
export class AppModule { }
