import { Injectable } from '@angular/core';
import { Character } from './models/character';
import { Observable, of, Subject } from 'rxjs';
import { selectCharacters } from  './state/selectors/characters.selectors';
import { Store, select } from '@ngrx/store';
import { CharacterState } from './state/reducers/characters.reducers';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  draft: Character[];
  draftChange: Subject<Character> = new Subject<Character>();
  // draftRX$: Observable<Character[]>;
  draftRX$: any

  constructor(
    private store: Store
  ) {
    this.draft = [];
    this.draftRX$ = this.store.select(selectCharacters)
    this.draftChange.subscribe((newCharacter) =>{
      this.draft.push(newCharacter)
    })
   }
  draftCharactersRX()
  {

  }  

  draftCharacter(newCharacter){
    this.draftChange.next(newCharacter);
  }
  getDraft(): Observable<Character[]>{

    return of(this.draft);
  }
}
