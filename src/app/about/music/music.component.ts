import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  currentTrack: any;
  timestamp = Date.now();

  readingActivity = {
    title: 'El Psicoanalista',
    author: 'John Katzenbach',
    progress: 5,
    cover: 'https://www.tornamesa.co/imagenes_grandes/9786287/978628763426.GIF'
  };

  gamingActivity = {
    title: 'Metal Gear Solid 2 Sons of Liberty',
    platform: 'Playstation 3',
    cover: 'https://e.snmc.io/lk/lv/x/802c3ab2ebde0601c9da2c6f21602feb/5297942',
    lastPlayed: this.timestamp
  }

  comicActivity = {
    title: 'Peter Parker The Spectacular Spider-Man',
    issue: '#9, Volume 1',
    cover: 'https://cdn.marvel.com/u/prod/marvel/i/mg/8/b0/5a0625ca1b6b8/portrait_uncanny.jpg',
    progress: 10
  }

  musicActivity = {
    title: 'Cry',
    author: 'Benson Boone',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6y8Qe3hvTKNSxyBos8_Vdm-adIf3Ez1hcg&s',

  }

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }
}
