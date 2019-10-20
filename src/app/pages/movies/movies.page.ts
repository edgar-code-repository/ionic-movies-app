import { Component, OnInit } from '@angular/core';

import { Movie } from './../../model/movie';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  moviesList: Movie[] = [];
  genresList = [];
  selectedGenre = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadAllGenres();
  }

  loadAllGenres() {
    const genresObservable = this.movieService.getGenres();
    genresObservable.subscribe(
      (data: any) => {
        console.log('[MoviesPage][successful call to MovieService][genres: ' + data + ']');
        this.genresList = data;

        if (this.genresList.length !== 0) {
          this.selectedGenre = this.genresList[0].id;
          this.loadMoviesByGenre();
        }
      },
      (error) => {
        console.log('[MoviesPage][Error code: ' + error.status + ']');
        //this.message = error.message;
      }
    );
  }

  loadMoviesByGenre() {
    const moviesObservable = this.movieService.getMoviesByGenre(this.selectedGenre);
    moviesObservable.subscribe(
      (data: any) => {
        console.log('[MoviesPage][successful call to MovieService][movies: ' + data + ']');
        this.moviesList = data;
      },
      (error) => {
        console.log('[MoviesPage][Error code: ' + error.status + ']');
        //this.message = error.message;
      }
    );
  }

  genreChange() {
    console.log('[MoviesPage][genreChange][selectedGenre: ' + this.selectedGenre + ']');

    if (this.selectedGenre !== 0) {
      this.loadMoviesByGenre();
    }
    else {
      this.moviesList = [];
    }

  }

}
