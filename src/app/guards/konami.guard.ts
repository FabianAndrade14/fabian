import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KonamiGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const konamiUnlocked = sessionStorage.getItem('konamiUnlocked');

    if (konamiUnlocked === 'true') {
      sessionStorage.removeItem('konamiUnlocked');
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
