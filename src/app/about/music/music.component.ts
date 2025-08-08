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
    cover: 'https://static.wikia.nocookie.net/spiderman/images/3/35/Peter_Parker%2C_The_Spectacular_Spider-Man_Vol_1_9.png/revision/latest?cb=20190317002741&path-prefix=es',
    progress: 10
  }

  musicActivity = {
    title: 'INVISIBLE',
    author: 'Duran Duran',
    cover: 'https://i.scdn.co/image/ab67616d0000b2736a5be5601ccc727d0dbb9c1f',

  }

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }
}
