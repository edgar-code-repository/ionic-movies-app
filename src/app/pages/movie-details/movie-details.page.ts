import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movieDetails: Movie = {
    id: 0,
    title: '',
    year: 0,
    poster: '',
    plot: '',
    genre_id: 0
  };

  flagLoading = true;
  flagError = false;
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const movieId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('[MovieDetailsPage][movieId: ' + movieId + ']');

    const movieObservable = this.movieService.getMovieById(movieId);
    movieObservable.subscribe(
      (data: any) => {
        console.log('[MovieDetailsPage][movie: ' + data.items[0].title + ']');
        this.movieDetails = data.items[0];
      },
      (error) => {
        console.log('[MovieDetailsPage][Error code: ' + error.status + ']');
        this.flagError = true;
        this.errorMessage = error.message;
      }
    );
  }

}
