import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {

  constructor() { 
    console.log("EN EL CONSTRUCTOR DE PERROS");
  }

  ngOnInit(): void {
  }

}
