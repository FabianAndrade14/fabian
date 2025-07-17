import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  photos = [
    {
      src: '../../assets/img/01.JPG',
      alt: 'Fabian in Comic-con',
      caption: 'In Comic con Bogotá – Jun ‘23'
    },
    {
      src: '../../assets/img/02.JPG',
      alt: 'Fabian in Comic-con',
      caption: 'In Comic con Bogotá – Jun ‘23'
    },
    {
      src: '../../assets/img/03.JPG',
      alt: 'Fabian in Chile',
      caption: 'In Iquique, Chile - December 2017'
    },
    {
      src: '../../assets/img/04.png',
      alt: 'Fabian in SOFA',
      caption: 'In SOFA - October 2023'
    },
    {
      src: '../../assets/img/05.png',
      alt: 'Fabian in Chile',
      caption: 'In SOFA - October 2023'
    },
    {
      src: '../../assets/img/06.JPG',
      alt: 'Fabian in México',
      caption: 'In Cancún, México - August 2021'
    }
  ];

  selectedPhoto: { src: string; alt: string; caption: string } | null = null;

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.photos.length);
    this.selectedPhoto = this.photos[randomIndex];
  }
}
