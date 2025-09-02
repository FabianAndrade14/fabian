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
    progress: 20 ,
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
    issue: '#16, Volume 1',
    cover: 'https://fichas.universomarvel.com/usa/portadas/ppssp1016.jpg',
    progress: 36
  }

  musicActivity = {
    title: 'Way to Fall',
    author: 'Starsailor',
    cover: 'https://i.scdn.co/image/ab67616d00001e023a572420b5e8d321cf0e767d',

  }

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }
}
