import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
    title: 'ECommmerceAPI',
    image: 'https://icon-library.com/images/e-commerce-icon/e-commerce-icon-4.jpg',
    stars: 1,
    description: 'API created using .NET'
  },
  {
    title: 'Frames',
    image: 'https://via.placeholder.com/48?text=F',
    stars: 644,
    description: 'Immersive Android wallpaper gallery dashboard app'
  },
  {
    title: 'Kuper',
    image: 'https://via.placeholder.com/48?text=K',
    stars: 224,
    description: 'Widget showcase for Kustom & Zooper'
  },
  {
    title: 'World Holidays',
    image: 'https://via.placeholder.com/48?text=W',
    stars: 4,
    description: 'Get to know upcoming worldwide holidays'
  },
  {
    title: 'Blueprint',
    image: 'https://via.placeholder.com/48?text=B',
    stars: 801,
    description: 'Feature-rich dashboard for Android icon packs'
  },
  {
    title: 'Kuper',
    image: 'https://via.placeholder.com/48?text=K',
    stars: 224,
    description: 'Widget showcase for Kustom & Zooper'
  },
  {
    title: 'PokemonApp',
    image: 'https://poke-api-pied.vercel.app/assets/images/poxedex.png',
    stars: 1,
    description: 'Frontend angular practice'
  },
  {
    title: 'Kuper',
    image: 'https://via.placeholder.com/48?text=K',
    stars: 224,
    description: 'Widget showcase for Kustom & Zooper'
  },
  {
    title: 'World Holidays',
    image: 'https://via.placeholder.com/48?text=W',
    stars: 4,
    description: 'Get to know upcoming worldwide holidays'
  }

  ]
}
