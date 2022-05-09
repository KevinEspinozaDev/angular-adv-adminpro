import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels = [ 'Descargas', 'Compras en Físico', 'Pedidos' ];
  data: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };
  titulo:string = 'Estadísticas Videojuego';

  constructor() { }

  ngOnInit(): void {
  }

}
