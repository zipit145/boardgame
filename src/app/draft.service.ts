import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  draft: Character[];
  draftChange: Subject<Character> = new Subject<Character>();

  constructor() {
    this.draft = [];
    this.draftChange.subscribe((newCharacter) =>{
      this.draft.push(newCharacter)
    })
   }

  draftCharacter(newCharacter){
    this.draftChange.next(newCharacter);
  }
  getDraft(): Observable<Character[]>{
    return of(this.draft);
  }
}
