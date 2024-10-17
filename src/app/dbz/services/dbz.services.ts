import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Crillin',
      power: 233,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 3333,
    },
    {
      id: uuid(),
      name: 'Otro',
      power: 3333,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  deleteCharacterByid(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
  // onDeleteCharacter(id: number): void {
  //   this.characters.splice(0, 1);
  // }
}
