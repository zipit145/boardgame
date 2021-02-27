import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharacterDashboardComponent } from './character-dashboard.component';

describe('CharacterDashboardComponent', () => {
  let component: CharacterDashboardComponent;
  let fixture: ComponentFixture<CharacterDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
