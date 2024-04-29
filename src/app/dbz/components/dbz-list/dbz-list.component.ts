import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css'
})
export class DbzListComponent {

  @Input()
  characterList: Character[] = [{
    name: 'Trunkz',
    power: 10
  }];

  @Output() onDeleteId = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }

}
