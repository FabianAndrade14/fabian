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
    title: 'Ultimate Spider-Man',
    issue: '#17, Volume 1',
    cover: 'https://comicfever.ca/cdn/shop/files/75960620796101711_1024x1024.jpg?v=1748282254',
    progress: 90
  }

  musicActivity = {
    title: 'Te necesito',
    author: 'Luis Miguel',
    cover: 'https://i.scdn.https://i.scdn.co/image/ab67616d0000b2733bc5251815626cf22fc71b30/image/ab67616d0000b27376c982b180d15c93b8bbd428',

  }

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }
}
