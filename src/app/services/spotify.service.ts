import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  clientId = '5d8cae4ec74e410d9aa291f5d3f72c85';
  redirectUri = 'https://fabian-dev.vercel.app/callback';
  private accessToken = 'BQD0k6fAo22kaFSVFCAvcjFfnA8Nz9hmrxY2dUMZ1VO6vBPiicIPp-OsjoRI5aNVTr5NRq5lP3f8TFcCumclOnfUUTVAr6RAV0OApvDKQ3gTLvwabDyoMZYwGHN0kmInjMjeV4i5j8E';
  scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'playlist-read-private'
  ];

  constructor(private http: HttpClient) {}

  getAuthUrl(): string {
    const scopeParam = this.scopes.join(' ');
    return `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.clientId}&redirect_uri=${ encodeURIComponent(this.redirectUri) }&scope=${scopeParam}`;
  }

  getCurrentlyPlayingTrack() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.accessToken }`
    });
    return this.http.get('https://api.spotify.com/v1/me/player/currently-playing', { headers });
  }

}
