import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola counter</h1>
    <p>oounter {{ counter }}</p>
    <button (click)="incrementar(1)">+1</button>
    <button (click)="reset(10)">RESET</button>
    <button (click)="incrementar(-1)">-1</button> `,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 10;

  incrementar(value: number): void {
    this.counter = this.counter + value;
  }
  reset(value: number) {
    this.counter = value;
  }
}
