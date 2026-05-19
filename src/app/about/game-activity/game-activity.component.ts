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
      title: 'Castlevania Lords of Shadow',
      platform: 'PlayStation 3',
      image:
        'https://images5.alphacoders.com/585/thumb-1920-585115.jpg',
    },
    {
      title: "The Amazing Spider-man 2",
      platform: 'PlayStation 3',
      image: 'https://wallpapercave.com/wp/wp9634337.jpg',
    },
  ];

  seasonalGames: SeasonalGame[] = [
    {
      title: 'Castlevania Lords of Shadow',
      platform: 'PlayStation 3',
      image:
        'https://wallpaperaccess.com/full/6261549.jpg',
      achievements: [
        {
          title: 'Experienced',
          description: 'Acquire 1000 experience points',
          date: '17/05/2026 10:33 p. m.',
          icon: '../../../assets/img/castle.png',
          trophyType: 'bronze',
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
