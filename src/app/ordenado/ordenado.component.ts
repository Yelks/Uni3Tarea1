import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenado',
  templateUrl: './ordenado.component.html',
  styleUrls: ['./ordenado.component.css']
})
export class OrdenadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filterpost= '';
  posts = [
    {
      id: 1,
      titulo: "Post Uno",
      fecha: "02/04/2019"
    },
    {
      id: 2,
      titulo: "Post Dos",
      fecha: "11/04/2019"
    },
    {
      id: 3,
      titulo: "Post Tres",
      fecha: "30/01/2019"
    },
    {
      id: 4,
      titulo: "Post Cuatro",
      fecha: "30/05/2019"
    },
    {
      id: 5,
      titulo: "Post Cinco",
      fecha: "30/04/2019"
    }
  ];
}
