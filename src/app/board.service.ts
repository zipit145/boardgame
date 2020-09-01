import { Injectable } from '@angular/core';
import { Board } from './board';
import { BOARD } from './mock-board';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  getBoard(): Observable<Board[]>{
    return of(BOARD);
  }
}
