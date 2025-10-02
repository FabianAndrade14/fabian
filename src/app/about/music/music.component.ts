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
    progress: 30 ,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nccrYxfCU_Dab1J5GS7HLdxWfRCGoiKZww&s'
  };

  gamingActivity = {
    title: 'Metal Gear Solid 3 Snake Eater',
    platform: 'Playstation 3',
    cover: 'https://e.snmc.io/lk/lv/x/802c3ab2ebde0601c9da2c6f21602feb/5297942',
    lastPlayed: this.timestamp
  }

  comicActivity = {
    title: 'The Amazing Spider-man',
    issue: '#31, Volume 6',
    cover: 'https://cdn.marvel.com/u/prod/marvel/i/mg/1/90/64d6455847b98/portrait_uncanny.jpg',
    progress: 32
  }

  musicActivity = {
    title: 'Swing (From "Marvel Spider-man 2")',
    author: 'EARTHGANG, Benji.',
    cover: 'https://cdn-images.dzcdn.net/images/cover/43ef8fcf4314459c8c8e49906e748c06/0x1900-000000-80-0-0.jpg',

  }

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }
}
