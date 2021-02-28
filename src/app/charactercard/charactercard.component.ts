import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';
import { DraftService } from '../draft.service';
import { draftCharacter, home } from '../state/actions/characters.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCharacters } from  '../state/selectors/characters.selectors';


@Component({
  selector: 'app-charactercard',
  templateUrl: './charactercard.component.html',
  styleUrls: ['./charactercard.component.css']
})
export class CharactercardComponent implements OnInit {
  @Input() character: Character;
  @Input() phase: string;
  draftRX$: Observable<Character[]>;

  constructor(
    private draftService: DraftService,
    private store: Store
    ) { }

  ngOnInit(): void {

  }
  draftCharacter(character) {
    this.store.dispatch(draftCharacter({character: character}));
    this.draftRX$ = this.store.select(selectCharacters);
  }
  deployCharacter(character) {
    console.log("character deploy", character);
  }

}
