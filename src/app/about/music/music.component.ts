import { Component, HostListener, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
    progress: 82,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nccrYxfCU_Dab1J5GS7HLdxWfRCGoiKZww&s'
  };

  gamingActivity = {
    title: 'The Legend of Zelda Wind Waker HD',
    platform: 'Nintendo Wii U',
    cover: 'https://assetsio.gnwcdn.com/137944197772.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
    lastPlayed: this.timestamp
  }

  comicActivity = {
    title: 'Invincible',
    issue: '#9 Volumen 1',
    cover: 'https://cdn.imagecomics.com/assets/i/releases/1015758/invincible-vol-3-perfect-strangers_bc56e8303b.jpg',
    progress: 10
  }

  musicActivity = {
    title: 'Working for the Weekend',
    author: 'Loverboy',
    cover: 'https://i.scdn.co/image/ab67616d0000b2739c56254072383ce8172ab4c6',

  }

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
  ]

  private currentIndex = 0;

  constructor(
    private spotifyService: SpotifyService,
    private http: HttpClient,
    private router: Router
  ) {}

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

  ngOnInit(): void {

  }
}
