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
      title: 'Final Fantasy VII Rebirth',
      platform: 'PS5',
      image:
        'https://d1lss44hh2trtw.cloudfront.net/assets/article/2023/09/14/final-fantasy-7-rebirth-gets-february-2024-release-date_feature.jpg',
    },
    {
      title: "The Amazing Spider-man 2",
      platform: 'PS3',
      image: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA00394_00/2/i_38d9df9db9dddcf6d789cce243878381bfed78d9e2091268e167d7be200ee2dc/i/pic0.png',
    },
  ];

  seasonalGames: SeasonalGame[] = [
    {
      title: 'Final Fantasy VII Rebirth',
      platform: 'PS5',
      image:
        'https://d1lss44hh2trtw.cloudfront.net/assets/article/2023/09/14/final-fantasy-7-rebirth-gets-february-2024-release-date_feature.jpg',
      achievements: [
        {
          title: 'The Price of Progress',
          description: 'Complete Chapter 7.',
          date: '23/2/2026 3:22 p. m.',
          icon: 'https://cdn.fastly.steamstatic.com/steamcommunity/public/images/apps/2909400/9326bd8c71edf5716b9d7fb7aa5e3f3d8215420d.jpg',
          trophyType: 'bronze',
        },
      ],
    },
    {
      title: "The Amazing Spider-man 2",
      platform: 'PS3',
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
