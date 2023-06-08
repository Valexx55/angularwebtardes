import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { PerrosComponent } from './components/perros/perros.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { NumerosComponent } from './components/numeros/numeros.component';
import { FortalezaComponent } from './components/fortaleza/fortaleza.component';

//en este array, se configuran las rutas
//se asocian o mapean un nombre de la url 
//a un componente
const routes: Routes = [
  //{path:"", component: DniComponent},
  {path:"fortaleza", component: FortalezaComponent},
  {path:"dni", component: DniComponent},
  {path:"perros", component: PerrosComponent},
  {path:"paciente", component: PacienteComponent},
  {path:"numeros", component: NumerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
