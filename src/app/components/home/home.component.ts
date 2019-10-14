import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos: any = {
    'jugador1': {
      'nombre': 'Helen',
      'numero': 9,
      'posicion': 'defensa',
    },
    'jugador2': {
      'nombre': 'Elena',
      'numero': 4,
      'posicion': 'delantero',
    },
    'jugador3': {
      'nombre': 'Reynaldo',
      'numero': 16,
      'posicion': 'pivot',
    },
    'jugador4': {
      'nombre': 'Herminia',
      'numero': 12,
      'posicion': 'entrenador',
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
