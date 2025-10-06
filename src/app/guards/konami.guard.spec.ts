import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { konamiGuard } from './konami.guard';

describe('konamiGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => konamiGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
