import { Injectable } from '@angular/core';
import { Character } from './models/character';
import { Observable, of, Subject } from 'rxjs';
import { selectCharacters } from  './state/selectors/characters.selectors';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  draft: Character[];
  draftChange: Subject<Character> = new Subject<Character>();
  draftRX$: Observable<Character[]>;

  constructor(
    private store: Store
  ) {
    this.draftRX$ = this.store.select(selectCharacters)
    // this.draftChange.subscribe((newCharacter) =>{  TODO reconsider using subjects 
    //   this.draft.push(newCharacter)
    // })
   }
}
