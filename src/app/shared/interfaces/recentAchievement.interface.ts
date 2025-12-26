export interface GameAchievement {
  title: string;
  description: string;
  date: string;
  icon: string;
  trophyType: 'bronze' | 'silver' | 'gold' | 'platinum';
}
