import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInsightsComponent } from './game-insights.component';

describe('GameInsightsComponent', () => {
  let component: GameInsightsComponent;
  let fixture: ComponentFixture<GameInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameInsightsComponent]
    });
    fixture = TestBed.createComponent(GameInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
