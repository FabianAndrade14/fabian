import { Component, AfterViewInit } from '@angular/core';
import { Slide, SeasonalGame, PSInsight, NintendoInsights, SteamInsight } from '../../shared/interfaces/game-activity.interface';
@Component({
  selector: 'app-game-activity',
  templateUrl: './game-activity.component.html',
  styleUrls: ['./game-activity.component.scss'],
})
export class GameActivityComponent implements AfterViewInit {
  currentIndex = 0;

  slides: Slide[] = [
    {
      title: 'X-Men Origins: Wolverine',
      platform: 'PlayStation 3',
      image:
        'https://wallpapercave.com/wp/5xSeI9g.jpg',
    },
    {
      title: "The Amazing Spider-man 2",
      platform: 'PlayStation 3',
      image: 'https://wallpapercave.com/wp/wp9634337.jpg',
    },
  ];

  seasonalGames: SeasonalGame[] = [
    {
      title: 'X-Men Origins: Wolverine',
      platform: 'PlayStation 3',
      image:
        'https://cdn2.steamgriddb.com/hero/a026d46bd57a1406c5e5931c907d25f1.png',
      achievements: [
        {
          title: 'Bar Fight',
          description: 'Defeated Victor Creed (Sabretooth)',
          date: '07/07/2026 10:33 a. m.',
          icon: 'https://image.api.playstation.com/trophy/np/NPWR00501_00_00F98F97EEA1DC56609FD9168CF1EE3E654937502B/17F2EE77C350A765938D784DC38DA31D94B00199.PNG',
          trophyType: 'silver',
        },
      ],
    },
    {
      title: "The Amazing Spider-man 2",
      platform: 'PlayStation 3',
      image: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00394_00/2/i_38d9df9db9dddcf6d789cce243878381bfed78d9e2091268e167d7be200ee2dc/i/pic0.png',
      achievements: [
        {
          title: 'Luchador!',
          description: 'Completed all combat challenges',
          date: '14/12/2019 10:41 p. m.',
          icon: '../../../assets/img/00.png',
          trophyType: 'bronze',
        },
      ],
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.updateSliderPosition(), 50);
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
    this.updateSliderPosition();
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    this.updateSliderPosition();
  }

  updateSliderPosition() {
    const slider = document.querySelector('.season-slider') as HTMLElement;
    if (!slider) return;

    slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}
