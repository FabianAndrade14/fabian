import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/spotify/spotify.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  currentTrack: any;
  isSpotifyLoggedIn = false;

  timestamp = Date.now();

  readingActivity = {
    title: 'El Psicoanalista',
    author: 'John Katzenbach',
    progress: 30,
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nccrYxfCU_Dab1J5GS7HLdxWfRCGoiKZww&s',
  };

  gamingActivity = {
    title: "Marvel's Spider-Man",
    platform: 'Playstation 4',
    cover:
      'https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png',
    lastPlayed: this.timestamp,
  };

  comicActivity = {
    title: 'The Amazing Spider-man',
    issue: '#14, Volume 7',
    cover:
      'https://cdn.marvel.com/u/prod/marvel/i/mg/a/20/68de9be3b6285/portrait_uncanny.jpg',
    progress: 40,
  };

  musicActivity = {
    title: 'No conectado a Spotify',
    author: '',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png',
  };

  private konamiCode: string[] = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];
  private currentIndex = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.checkSession();

    if (this.isSpotifyLoggedIn) {
      this.loadCurrentSong();
      setInterval(() => this.loadCurrentSong(), 5000);
    }
  }

  checkSession() {
    const token = localStorage.getItem('access_token');
    this.isSpotifyLoggedIn = !!token;
  }

  loginWithSpotify() {
    const clientId = '7313b8c753ab4269a3f55166eaf91cbc';
    const redirectUri = 'https://fabian.dev:4200/callback';

    const scopes = [
      'user-read-currently-playing',
      'user-read-playback-state',
    ].join('%20');

    window.location.href =
      `https://accounts.spotify.com/authorize?client_id=${clientId}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${scopes}`;
  }

  loadCurrentSong() {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    this.spotifyService.getCurrentTrack(token).subscribe({
      next: (data: any) => {
        if (!data || !data.item) return;

        this.musicActivity = {
          title: data.item.name,
          author: data.item.artists.map((a: any) => a.name).join(', '),
          cover: data.item.album.images[0].url,
        };

        this.currentTrack = data;
      },
      error: () => {},
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === this.konamiCode[this.currentIndex]) {
      this.currentIndex++;
      if (this.currentIndex === this.konamiCode.length) {
        this.activateKonami();
        this.currentIndex = 0;
      }
    } else {
      this.currentIndex = 0;
    }
  }

  private activateKonami() {
    alert('Konami Code Activado 🕹️');
    sessionStorage.setItem('konamiUnlocked', 'true');
    this.router.navigate(['/about/game-activity']);
  }
}
