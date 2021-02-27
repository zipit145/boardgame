import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSelectedUnitDashboardComponent } from './current-selected-unit-dashboard.component';

describe('CurrentSelectedUnitDashboardComponent', () => {
  let component: CurrentSelectedUnitDashboardComponent;
  let fixture: ComponentFixture<CurrentSelectedUnitDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSelectedUnitDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSelectedUnitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
