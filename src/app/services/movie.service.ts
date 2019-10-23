import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json'}
    )
  };

  constructor(private httpClient: HttpClient) { }

  getGenres() {
    console.log('[MovieService][getGenres][START]');
    console.log('[MovieService][getGenres][genresUrlRestAPI: ' + environment.NODE_REST_API_URL_GENRES + ']');

    const observable = this.httpClient.get(environment.NODE_REST_API_URL_GENRES, this.httpOptions);

    console.log('[MovieService][getGenres][END]');
    return observable;
  }

  getMoviesByGenre(genreId: number, page: number) {
    const apiUrl = environment.NODE_REST_API_URL_GENRES + '/' + genreId + '/movies?page=' + page;

    console.log('[MovieService][getMoviesByGenre][START]');
    console.log('[MovieService][getMoviesByGenre][genreId: ' + genreId + ']');
    console.log('[MovieService][getMoviesByGenre][apiUrl: ' + apiUrl + ']');
    console.log('[MovieService][getMoviesByGenre][page: ' + page + ']');

    const observable = this.httpClient.get(apiUrl, this.httpOptions);

    console.log('[MovieService][getMoviesByGenre][END]');
    return observable;
  }

  getMovieById(movieId: any) {
    const apiUrl = environment.NODE_REST_API_URL_MOVIES + '/' + movieId;

    console.log('[MovieService][getMovieById][START]');
    console.log('[MovieService][getMovieById][movieId: ' + movieId + ']');
    console.log('[MovieService][getMovieById][apiUrl: ' + apiUrl + ']');

    const observable = this.httpClient.get(apiUrl, this.httpOptions);

    console.log('[MovieService][getMovieById][END]');
    return observable;
  }

}
