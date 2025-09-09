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
    title: 'The Amazing Spider-man',
    issue: '#6 (#900), Volume 6',
    cover: 'https://cdn.marvel.com/u/prod/marvel/i/mg/b/e0/62dab2e8e051d/clean.jpg',
    progress: 42
  }

  musicActivity = {
    title: 'What It Sounds Like',
    author: 'HUNTR/X, EJAE, AUDREY NUNA, REI AMI, KPop Demon Hunters Cast',
    cover: 'https://i1.sndcdn.com/artworks-rQp07z27BM1sjRzW-PCW3cg-t500x500.png',

  }

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }
}
