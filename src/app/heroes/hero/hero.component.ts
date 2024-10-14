import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalacedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} ${this.age}`;
  }

  changeHero() {
    this.name = 'Spiderman';
  }

  changeAge() {
    this.age = 67;
  }

  resetForm() {
    this.name = 'Ironman';
    this.age = 45;
  }
}
