import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy DniComponent")
  }

  ngOnInit(): void {
  }

}
