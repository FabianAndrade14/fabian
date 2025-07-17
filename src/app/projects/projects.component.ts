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
    description: 'API created using .NET',
    link: 'https://github.com/FabianAndrade14/pixabay-react'
  },
  {
    title: 'Pixabay image searcher',
    image: 'https://cdn-icons-png.flaticon.com/512/8122/8122729.png',
    stars: 2,
    description: 'Image browser created with React',
    link: 'https://github.com/FabianAndrade14/pixabay-react'
  },
  {
    title: 'Journal App',
    image: 'https://github.com/FabianAndrade14/journal-app/raw/main/book_sprite.png',
    stars: 1,
    description: 'A developer diary',
    link: 'https://github.com/FabianAndrade14/journal-app'
  },
  {
    title: 'Gif Expert',
    image: 'https://icon-library.com/images/image-icon-png/image-icon-png-6.jpg',
    stars: 4,
    description: 'Take a look to your favourite gifs',
    link: 'https://github.com/FabianAndrade14/GifExpertApp'
  },
  {
    title: 'Fortaleza de la soledad',
    image: 'https://firebasestorage.googleapis.com/v0/b/fandrade-fa579.appspot.com/o/logo-fortress.png?alt=media&token=bda3a5ee-b938-46d5-ad81-7ee232d4386e',
    stars: 2,
    description: 'Business initiave developed with Angular'
  },
  {
    title: 'PokemonApp',
    image: 'https://poke-api-pied.vercel.app/assets/images/poxedex.png',
    stars: 1,
    description: 'Frontend angular practice'
  },
  {
    title: 'Catchy Hero Phrases',
    image: 'https://images.seeklogo.com/logo-png/13/2/spider-man-comic-new-logo-png_seeklogo-130400.png',
    stars: 4,
    description: 'API developed with node',
    link: 'https://github.com/FabianAndrade14/catchyHeroPhrases',
  }

  ]
}
