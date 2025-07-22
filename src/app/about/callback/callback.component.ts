// src/app/about/callback/callback.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  template: '<p>Redireccionando...</p>',
})
export class CallbackComponent implements OnInit {
  ngOnInit(): void {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      localStorage.setItem('spotify_token', accessToken);
      window.location.href = '/about/music'; // redirige a tu componente que muestre la canción
    } else {
      console.error('No se encontró el token');
    }
  }
}
