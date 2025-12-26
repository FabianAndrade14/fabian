import { GameAchievement } from "./recentAchievement.interface";

export interface Slide {
  title: string;
  platform: string;
  image: string;
}

export interface SeasonalGame {
  title: string;
  platform: string;
  image: string;
  achievements: GameAchievement[];

}

export interface PSInsight {
  year: number;
  style: string;
  titles: number;
  trophies: number;
  hours: number;
  multiplayerHours: number;
  favoriteGameImg: string;
  favoriteGameName: string;
}

export interface NintendoInsights {
  year: number;
  style: string;
  titles: number;
  hours: number;
  favoriteGameImg: string;
  favoriteGameName: string;
}

export interface SteamInsight {
  year: number;
  style: string;
  titles: number;
  achievements: number;
  hours: number;
  favoriteGameImg: string;
  favoriteGameName: string;
}
