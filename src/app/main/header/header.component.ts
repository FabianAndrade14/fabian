import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  authUrl: string;

  constructor(private spotify: SpotifyService) {
    this.authUrl = this.spotify.getAuthUrl();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
