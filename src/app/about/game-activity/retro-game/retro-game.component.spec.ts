import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroGameComponent } from './retro-game.component';

describe('RetroGameComponent', () => {
  let component: RetroGameComponent;
  let fixture: ComponentFixture<RetroGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetroGameComponent]
    });
    fixture = TestBed.createComponent(RetroGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
