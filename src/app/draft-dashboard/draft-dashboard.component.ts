import { Component, OnInit, OnChanges } from '@angular/core';
import { Character } from '../models/character';
import { DraftService } from '../draft.service';

@Component({
  selector: 'app-draft-dashboard',
  templateUrl: './draft-dashboard.component.html',
  styleUrls: ['./draft-dashboard.component.css']
})
export class DraftDashboardComponent implements OnInit {
  draft: Character[];
  phase: string;

  constructor(private draftService: DraftService) {
    this.draft = this.draftService.draft
    this.phase = "Deploy"
   }

  ngOnInit(): void {
  }

}
