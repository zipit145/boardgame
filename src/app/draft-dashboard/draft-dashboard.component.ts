import { Component, OnInit, OnChanges } from '@angular/core';
import { Character } from '../models/character';
import { DraftService } from '../draft.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-draft-dashboard',
  templateUrl: './draft-dashboard.component.html',
  styleUrls: ['./draft-dashboard.component.css']
})
export class DraftDashboardComponent implements OnInit {
  draft: Character[];
  phase: string;
  draftRX$: Observable<Character[]>;

  constructor(private draftService: DraftService) {

   }

  ngOnInit(): void {
    this.draftRX$ = this.draftService.draftRX$
    this.phase = "Deploy"
  }

}
