import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  song: any = null;
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
    issue: '#7, Volume 1',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdv_nSO8cptkjyU4SK__0WDqi3gL6WjooEVg&s',
    progress: 50
  }

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.spotifyService.getCurrentlyPlaying().subscribe({
      next: (data) => this.song = data?.item || null,
      error: (err) => console.error('Error al obtener la canción:', err),
    })
  }

  get songCover(): string {
    return this.song?.album?.images?.[0]?.url || '';
  }

  get songTitle(): string {
    return this.song?.name || '';
  }

  get songArtist(): string {
    return this.song?.artists?.[0]?.name || '';
  }

  get songLink(): string {
    return this.song?.external_urls?.spotify || '#';
  }
}
