import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getCurrentlyPlaying(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get(`${environment.spotifyApiUrl}`, { headers });
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('spotify_token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
//
