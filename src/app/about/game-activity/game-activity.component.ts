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
      title: 'Batman Arkham Origins',
      platform: 'PS3',
      image:
        'https://wallpapers.com/images/hd/batman-arkham-origins-wallpaper-f1sips36ia9c56o2.jpg',
    },
    {
      title: "Marvel's Spider-Man: Miles Morales",
      platform: 'PS5',
      image: 'https://images.alphacoders.com/129/1292613.png',
    },
  ];

  seasonalGames: SeasonalGame[] = [
    {
      title: 'Batman Arkham Origins',
      platform: 'PS3',
      image:
        'https://wallpapers.com/images/hd/batman-arkham-origins-wallpaper-f1sips36ia9c56o2.jpg',
    },
    {
      title: "Marvel's Spider-Man: Miles Morales",
      platform: 'PS5',
      image: 'https://images.alphacoders.com/129/1292613.png',
    },
  ];

  psInsights: PSInsight[] = [
    {
      year: 2025,
      style: 'Pistolero',
      titles: 17,
      trophies: 557,
      hours: 356,
      multiplayerHours: 0,
      favoriteGameImg:
        'https://fanatical.imgix.net/product/original/ae2c69cd-acfd-488e-a7cc-64737ff80f05.jpeg?auto=compress,format&w=870&fit=crop&h=489',
      favoriteGameName: 'Metal Gear Solid V: The Definitive Experience',
    },
    {
      year: 2024,
      style: 'Jugador de Rol',
      titles: 24,
      trophies: 415,
      hours: 592,
      multiplayerHours: 5,
      favoriteGameImg:
        'https://cdn1.epicgames.com/94a50905f377470c84c8e4b7c38f9cdd/offer/EGS_DRAGONQUESTXISEchoesofanElusiveAge_SquareEnix_S1-2560x1440-8c53482ccea57e56b7140fd0865cf74c.jpg',
      favoriteGameName: 'Dragon Quest XI',
    },
    {
      year: 2023,
      style: 'Cazador de Secretos',
      titles: 5,
      trophies: 98,
      hours: 137,
      multiplayerHours: 3,
      favoriteGameImg:
        'https://www.gamespot.com/a/uploads/screen_kubrick/1406/14063904/3454534-castlevania.jpg',
      favoriteGameName: 'Castlevania Requiem',
    },
    {
      year: 2020,
      style: 'Aventurero',
      titles: 9,
      trophies: 368,
      hours: 239,
      multiplayerHours: 0,
      favoriteGameImg: 'https://images6.alphacoders.com/913/913243.jpg',
      favoriteGameName: "Marvel's Spider-Man",
    },
  ];

  nintendoInsights: NintendoInsights[] = [
    {
      year: 2024,
      style: 'Action-RPG Adventurer',
      titles: 25,
      hours: 177,
      favoriteGameImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jEdQgPsN4k7aRSxftgS4Y_WSGUT1L_RhXg&s',
      favoriteGameName: 'Dragon Ball Z Kakarot',
    },
    {
      year: 2023,
      style: 'Adventurer',
      titles: 17,
      hours: 173,
      favoriteGameImg:
        'https://images.wallpapersden.com/image/download/zelda-tears-of-the-kingdom-4k_bmZuZ26UmZqaraWkpJRobWllrWdma2U.jpg',
      favoriteGameName: 'The Legend of Zelda: Tears of the Kingdom',
    },
  ]

  steamInsights: SteamInsight[] = [
    {
      year: 2024,
      style: 'Nightfall Warrior',
      titles: 2,
      achievements: 557,
      hours: 7,
      favoriteGameImg:
        'https://i.redd.it/dewyeh1aul241.png',
      favoriteGameName: 'Resident Evil 3',
    },
    {
      year: 2023,
      style: 'Retro Hackmaster',
      titles: 7,
      achievements: 166,
      hours: 110,
      favoriteGameImg:
        'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/QeJWAaLcYNOpCv7yCVZZEOY5.jpg?w=440',
      favoriteGameName: 'Marvel\'s Spider-Man Remastered',
    },
    {
      year: 2022,
      style: 'Dynamic Worldfighter',
      titles: 7,
      achievements: 52,
      hours: 64,
      favoriteGameImg:
        'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/QeJWAaLcYNOpCv7yCVZZEOY5.jpg?w=440',
      favoriteGameName: 'Marvel\'s Spider-Man Remastered',
    },
  ]
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
