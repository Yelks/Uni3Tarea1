import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayusculas',
  templateUrl: './mayusculas.component.html',
  styleUrls: ['./mayusculas.component.css']
})
export class MayusculasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = "yelsin josue"
  apellido: string = "CRUZ AVILEZ"
  clase: string = "Framework y Librerías de Javascript"

}
