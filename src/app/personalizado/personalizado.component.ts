import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.component.html',
  styleUrls: ['./personalizado.component.css']
})
export class PersonalizadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  vector = [1,2,3,4,5,6,7];
}
