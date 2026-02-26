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
    progress: 20 ,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nccrYxfCU_Dab1J5GS7HLdxWfRCGoiKZww&s'
  };

  gamingActivity = {
    title: 'Final Fantasy VII Rebirth',
    platform: 'Playstation 5',
    cover: 'https://i.3djuegos.com/juegos/18599/final_fantasy_vii_remake_parte_ii/fotos/ficha/final_fantasy_vii_remake_parte_ii-5867864.webp',
    lastPlayed: this.timestamp
  }

  comicActivity = {
    title: 'The Spectacular Spider-Man',
    issue: '#22, Volume 1',
    cover: 'https://spiderfan.org/images/title/comics/spiderman_spectacular/022.jpg',
    progress: 13
  }

  musicActivity = {
    title: 'New Perspective',
    author: ' Panic! at the Disco',
    cover: 'https://i.scdn.co/image/ab67616d0000b273d536799e5d59ff3f42874aec',

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
