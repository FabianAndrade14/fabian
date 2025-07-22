import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  clientId = 'ebe24560f663410998205538db250347';
  redirectUri = 'https://localhost:4200/callback';
  private accessToken = 'BQCxBhK0JhTI_aJhoKMVTzIBvTlunEdGQL0azThGDPKI0cKCksQtilH_N-w2edxJFK357NSj2JRKvqsg_qVm9MLAwFxkYtn7H7NqV66-ci9xpB1EjuUGOKhQsSqDEiq_gpegOVMOgCLm5uwLiFp9H3OGdHogQCZhUQPCAFXwMvC69p0YgKKa1OoLs6syRydgSD4o58a4nBVDP8YUJuwNhb9hV7mjaqJ2yGPyFpX-LzmvqA';
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
    return `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(scopeParam)}`;
  }

  getCurrentlyPlayingTrack() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.accessToken }`
    });
    return this.http.get('https://api.spotify.com/v1/me/player/currently-playing', { headers });
  }

}
