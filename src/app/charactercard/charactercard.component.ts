import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { DraftService } from '../draft.service';


@Component({
  selector: 'app-charactercard',
  templateUrl: './charactercard.component.html',
  styleUrls: ['./charactercard.component.css']
})
export class CharactercardComponent implements OnInit {
  @Input() character: Character;
  @Input() phase: string;

  constructor(private draftService: DraftService) { }

  ngOnInit(): void {
  }
  draftCharacter(character) {
    this.draftService.draftCharacter(character);
  }
  deployCharacter(character) {
    console.log("character deploy", character);
  }

}
