import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { CharacterService } from '../character.service';
import { Board } from '../board';
import { Character } from '../character';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board[];
  characters: Character[];

  constructor(private boardService: BoardService, private characterService: CharacterService) {

  }

  ngOnInit(): void {
    this.getBoard();
    this.getCharacters();
  }
  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters)
  }
  getBoard(): void{
    this.boardService.getBoard()
      .subscribe(board => this.board = board)
  }

}
