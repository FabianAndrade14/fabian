import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
  private API = 'http://localhost:3000/spotify';

  constructor(private http: HttpClient) {}

  exchangeCode(code: string): Observable<any> {
    return this.http.post(`${this.API}/token`, { code });
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.API}/refresh`, { refresh_token: refreshToken });
  }

  getCurrentTrack(token: string): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
