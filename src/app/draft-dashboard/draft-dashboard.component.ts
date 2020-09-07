import { Component, OnInit, OnChanges } from '@angular/core';
import { Character } from '../character';
import { DraftService } from '../draft.service';

@Component({
  selector: 'app-draft-dashboard',
  templateUrl: './draft-dashboard.component.html',
  styleUrls: ['./draft-dashboard.component.css']
})
export class DraftDashboardComponent implements OnInit {
  draft: Character[];

  constructor(private draftService: DraftService) {
    this.draft = this.draftService.draft
   }

  ngOnInit(): void {
  }

}
