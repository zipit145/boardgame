import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './board/board.component';
import { CharacterDashboardComponent } from './character-dashboard/character-dashboard.component';
import { ControlsComponent } from './controls/controls.component';

import { AngularMaterialModule } from './angular-material.module';
import { CharactercardComponent } from './charactercard/charactercard.component';
import { DraftDashboardComponent } from './draft-dashboard/draft-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CharacterDashboardComponent,
    ControlsComponent,
    CharactercardComponent,
    DraftDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
