import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styles: []
})
export class DatosComponent implements OnInit {

  @Input() name: string;
  @Input() dorsal: number;
  @Input() position: string;

  constructor() { }

  ngOnInit() {
  }

}
