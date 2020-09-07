import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  draft: Character[];

  constructor() {
    this.draft = [];
   }

  draftCharacter(newCharacter){
    this.draft.push(newCharacter);
  }
  getDraft(): Observable<Character[]>{
    return of(this.draft);
  }
}
