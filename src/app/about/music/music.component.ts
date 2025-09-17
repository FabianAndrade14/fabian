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
    title: 'Metal Gear Solid 3 Snake Eater',
    platform: 'Playstation 3',
    cover: 'https://e.snmc.io/lk/lv/x/802c3ab2ebde0601c9da2c6f21602feb/5297942',
    lastPlayed: this.timestamp
  }

  comicActivity = {
    title: 'The Amazing Spider-man',
    issue: '#19, Volume 6',
    cover: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/60/63d28f1b4354e/portrait_uncanny.jpg',
    progress: 8
  }

  musicActivity = {
    title: 'You Get What You Give',
    author: 'New Radicals',
    cover: 'https://i.scdn.co/image/ab67616d0000b273dfdedd4553b40bbaab342dae',

  }

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }
}
