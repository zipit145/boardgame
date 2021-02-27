import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';
import { DraftService } from '../draft.service';
import { draftCharacter } from '../state/actions/characters.actions';
import { selectCharacters } from '../state/selectors/characters.selectors';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-charactercard',
  templateUrl: './charactercard.component.html',
  styleUrls: ['./charactercard.component.css']
})
export class CharactercardComponent implements OnInit {
  @Input() character: Character;
  @Input() phase: string;

  constructor(
    private draftService: DraftService,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.store.select(selectCharacters).subscribe(data => console.log("test", data))
  }
  draftCharacter(character) {
    this.draftService.draftCharacter(character);
    this.store.dispatch(draftCharacter(character));
  }
  deployCharacter(character) {
    console.log("character deploy", character);
  }

}
