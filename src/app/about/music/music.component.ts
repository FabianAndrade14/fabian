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
    title: 'Metal Gear Solid V: The Phantom Pain',
    platform: 'Playstation 4',
    cover: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/mixcollage-06-dec-2024-08-51-pm-8168.jpg?q=50&fit=crop&w=480&dpr=1.5',
    lastPlayed: this.timestamp
  }

  comicActivity = {
    title: 'Peter Parker: The Spectacular Spider-man',
    issue: '#8, Volume 1',
    cover: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/03/5a0626551a786/clean.jpg',
    progress: 5
  }

  musicActivity = {
    title: 'High Hopes',
    author: 'Panic! at the disco',
    cover: 'https://i1.sndcdn.com/artworks-ur6GPYq7yjSV-0-t500x500.jpg',

  }

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }
}
