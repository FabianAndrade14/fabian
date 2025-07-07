import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    const hash = window.location.hash;

    if (hash) {
      const params = new URLSearchParams(hash.slice(1));
      const accessToken = params.get('access_token');
      const expiresIn = Number(params.get('expires_in') || 3600);

      if (accessToken) {
        localStorage.setItem('spotify_token', accessToken);
        localStorage.setItem('spotify_token_expire', (Date.now() + expiresIn * 1000).toString());

        this.router.navigate(['/']);
      } else {
        console.error('No se encontró el token en la URL');
        this.router.navigate(['/']);
      }
    }
  }
}
