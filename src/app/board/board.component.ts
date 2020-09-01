import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from '../board';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board[];

  constructor(private boardService: BoardService) {

  }

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void{
    this.boardService.getBoard()
      .subscribe(board => this.board = board)
  }

}
