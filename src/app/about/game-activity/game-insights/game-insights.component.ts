import { Component } from '@angular/core';
import {
  PSInsight,
  NintendoInsights,
  SteamInsight,
} from '../../../shared/interfaces/game-activity.interface';

@Component({
  selector: 'app-game-insights',
  templateUrl: './game-insights.component.html',
  styleUrls: ['./game-insights.component.scss'],
})
export class GameInsightsComponent {
  platforms = ['ps', 'nintendo', 'steam'] as const;
  currentPlatformIndex = 0;

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
      year: 2025,
      style: 'Action-RPG Adventurer',
      titles: 25,
      hours: 177,
      favoriteGameImg:
        'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_MetalGearSolid3SnakeEaterMasterCollectionVersion.jpg',
      favoriteGameName: 'Metal Gear Solid Master Collection',
    },
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
    {
      year: 2021,
      style: 'Open-World Hero',
      titles: 2,
      hours: 130,
      favoriteGameImg:
        'https://automationpanda.com/wp-content/uploads/2018/06/botw-share_icon.jpg',
      favoriteGameName: 'The Legend of Zelda: Tears of the Kingdom',
    },
  ];

  steamInsights: SteamInsight[] = [
    {
      year: 2025,
      style: 'Shōnen Brawler',
      titles: 6,
      achievements: 53,
      hours: 110,
      favoriteGameImg: 'https://wallpapercave.com/wp/wp5790073.jpg',
      favoriteGameName: "My Hero One's Justice 2",
    },
    {
      year: 2024,
      style: 'Nightfall Warrior',
      titles: 2,
      achievements: 557,
      hours: 7,
      favoriteGameImg: 'https://i.redd.it/dewyeh1aul241.png',
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
      favoriteGameName: "Marvel's Spider-Man Remastered",
    },
    {
      year: 2022,
      style: 'Dynamic Worldfighter',
      titles: 7,
      achievements: 52,
      hours: 64,
      favoriteGameImg:
        'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/QeJWAaLcYNOpCv7yCVZZEOY5.jpg?w=440',
      favoriteGameName: "Marvel's Spider-Man Remastered",
    },
  ];

  get currentPlatform() {
    return this.platforms[this.currentPlatformIndex];
  }

  prevPlatform() {
    this.currentPlatformIndex =
      (this.currentPlatformIndex - 1 + this.platforms.length) %
      this.platforms.length;
  }

  nextPlatform() {
    this.currentPlatformIndex =
      (this.currentPlatformIndex + 1) % this.platforms.length;
  }
}
