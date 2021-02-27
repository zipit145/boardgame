import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-dashboard',
  templateUrl: './character-dashboard.component.html',
  styleUrls: ['./character-dashboard.component.css']
})
export class CharacterDashboardComponent implements OnInit {
  characters: Character[];
  phase: string;

  constructor( private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
    this.phase = "Draft";
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters)
  }

}
