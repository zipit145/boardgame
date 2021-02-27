import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './board/board.component';
import { CharacterDashboardComponent } from './character-dashboard/character-dashboard.component';
import { ControlsComponent } from './controls/controls.component';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';

import { AngularMaterialModule } from './angular-material.module';
import { CharactercardComponent } from './charactercard/charactercard.component';
import { DraftDashboardComponent } from './draft-dashboard/draft-dashboard.component';
import { CurrentSelectedUnitDashboardComponent } from './current-selected-unit-dashboard/current-selected-unit-dashboard.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers/characters.reducers';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CharacterDashboardComponent,
    ControlsComponent,
    CharactercardComponent,
    DraftDashboardComponent,
    CurrentSelectedUnitDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
