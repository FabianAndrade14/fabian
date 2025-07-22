import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  private accessToken = '';

  constructor(private http: HttpClient) {}

  getCurrentlyPlayingTrack() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ this.accessToken }`
    });
    return this.http.get('https://api.spotify.com/v1/me/player/currently-playing', { headers });

  }
}
//
