import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  a : number = 4.34;
  b : number = 24.463;
  resultado: number = this.a + this.b;

}
