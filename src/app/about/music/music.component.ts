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
    progress: 30 ,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nccrYxfCU_Dab1J5GS7HLdxWfRCGoiKZww&s'
  };

  gamingActivity = {
    title: 'Batman Arkham Knight',
    platform: 'Playstation 4',
    cover: 'https://image.api.playstation.com/gs2-sec/acpkgo/prod/CUSA00133_00/374/i_21516ca32977519346e7b5cbf52fcadf722998b0d0a781fbeeea687cd3dca173/i/icon0.png',
    lastPlayed: this.timestamp
  }

  comicActivity = {
    title: 'The Amazing Spider-man',
    issue: '#15, Volume 7',
    cover: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/6903b731f13eb/portrait_uncanny.jpg',
    progress: 40
  }

  musicActivity = {
    title: 'You Get What You Give',
    author: 'New Radicals',
    cover: 'https://i.scdn.co/image/ab67616d0000b27387e512c79842c7ed2a8f2035',

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
