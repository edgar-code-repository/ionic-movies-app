import { Component, OnInit } from '@angular/core';

import { Movie } from './../../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  moviesList: Movie[] = [
    {
      id: 1,
      title: 'Star Wars',
      poster: 'https://images-na.ssl-images-amazon.com/images/I/81w4kfIpSjL._SY550_.jpg',
      year: 1977,
      plot: '',
      idGenre: 0
    },
    {
      id: 2,
      title: 'Saturday Night Fever',
      poster: 'https://images-na.ssl-images-amazon.com/images/I/51HH4WHN8VL.jpg',
      year: 1977,
      plot: '',
      idGenre: 0
    },
    {
      id: 3,
      title: 'Blade Runner',
      poster: 'https://cdn.shopify.com/s/files/1/0627/1477/products/Blade_Runner080618PF_8f704f19-4808-47e5-93dc-224062b4d96f_large.jpg?v=1543504514',
      year: 1982,
      plot: '',
      idGenre: 0
    },
    {
      id: 4,
      title: 'The Terminator',
      poster: 'https://images-na.ssl-images-amazon.com/images/I/A1wiVBc2VLL._SY550_.jpg',
      year: 1984,
      plot: '',
      idGenre: 0
    },
    {
      id: 5,
      title: 'The Matrix',
      poster: 'https://bloximages.chicago2.vip.townnews.com/stardem.com/content/tncms/assets/v3/editorial/9/1b/91b8775d-f35a-5f99-a3d1-9cb36d97279e/5c48d82b6bfb7.image.jpg?resize=500%2C773',
      year: 1999,
      plot: '',
      idGenre: 0
    }
  ];
  genresList = [];
  selectedGenre = 0;

  constructor() { }

  ngOnInit() {
  }

}
