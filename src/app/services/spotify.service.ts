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
  private accessToken = 'BQBlx2JDP3OLB2Ghw48LbM5_600nUb_PJYnATXzykAQim3SAsmkZGdfzX9wz3Xi5f1k0B5b0TfPlnKtvjW1NXZRvxpQC9RwrM_Hwe5h4bUvQ6ggHA_F1cec6IxpgBjVcLO4z-IAfJub0PPEX5hQHVD8mVKJculi88MRuYn0LI2d7yCQK5a4lxg5Abld8TZJNrwHT93LsRkg37dcZvC3YqSgpU373_qMLQKTSMO1F1wpWLg';
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
    return `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&redirect_uri=${ encodeURIComponent(this.redirectUri) }&scope=${scopeParam}`;
  }

  getCurrentlyPlayingTrack() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.accessToken }`
    });
    return this.http.get('https://api.spotify.com/v1/me/player/currently-playing', { headers });
  }

}
