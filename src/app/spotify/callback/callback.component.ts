import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-callback',
  template: `<p>Conectando con Spotify...</p>`
})
export class CallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (!code) return;

      this.spotifyService.exchangeCode(code).subscribe(res => {
        localStorage.setItem('access_token', res.access_token);
        if (res.refresh_token) {
          localStorage.setItem('refresh_token', res.refresh_token);
        }

        this.router.navigate(['/profile/music']);
      });
    });
  }
}
