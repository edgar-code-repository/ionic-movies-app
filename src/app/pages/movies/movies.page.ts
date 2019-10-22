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
  page = 1;
  totalPages = 3;

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

  loadMoviesByGenre(event?) {
    const moviesObservable = this.movieService.getMoviesByGenre(this.selectedGenre, this.page);
    moviesObservable.subscribe(
      (data: any) => {
        console.log('[MoviesPage][successful call to MovieService][movies: ' + data + ']');
        this.moviesList = this.moviesList.concat(data);

        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.log('[MoviesPage][Error code: ' + error.status + ']');
        //this.message = error.message;
      }
    );
  }

  loadMoreMovies(event) {
    console.log('[MoviesPage][loadMoreMovies]');

    this.page++;
    this.loadMoviesByGenre(event);

    if (this.page === this.totalPages) {
      event.target.disabled = true;
    }
  }

  genreChange() {
    console.log('[MoviesPage][genreChange][selectedGenre: ' + this.selectedGenre + ']');

    if (this.selectedGenre !== 0) {
      this.page = 1;
      this.loadMoviesByGenre();
    } else {
      this.moviesList = [];
    }
  }

}
