import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDashboardComponent } from './draft-dashboard.component';

describe('DraftDashboardComponent', () => {
  let component: DraftDashboardComponent;
  let fixture: ComponentFixture<DraftDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
