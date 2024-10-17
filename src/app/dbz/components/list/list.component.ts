import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{ name: 'Trunk', power: 10 }];

  @Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacterByid(id?: string) {
    if (!id) return;
    this.onDelete.emit(id);
  }
  // onDeleteCharacter(id: number): void {
  //   //todo emitir el id del personaje

  //   this.onDelete.emit(index);
  //   console.log(index);
  // }
}
