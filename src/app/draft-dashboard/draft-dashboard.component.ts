import { Component, OnInit, OnChanges } from '@angular/core';
import { Character } from '../models/character';
import { DraftService } from '../draft.service';
import { Observable } from 'rxjs';
import { CharacterState } from '../state/reducers/characters.reducers';

@Component({
  selector: 'app-draft-dashboard',
  templateUrl: './draft-dashboard.component.html',
  styleUrls: ['./draft-dashboard.component.css']
})
export class DraftDashboardComponent implements OnInit {
  draft: Character[];
  phase: string;
  draftRX$: Observable<Character[]>;;

  constructor(private draftService: DraftService) {

   }

  ngOnInit(): void {
    this.draft = this.draftService.draft
    this.draftService.draftCharactersRX();
    this.draftRX$ = this.draftService.draftRX$
    this.draftRX$.subscribe(data => console.log(data))
    this.phase = "Deploy"
  }

}
