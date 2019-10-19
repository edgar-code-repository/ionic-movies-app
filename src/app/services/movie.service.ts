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
    console.log('[MovieService][getGenres][genresUrlRestAPI: ' + environment.NODE_REST_API_URL + ']');

    const observable = this.httpClient.get(environment.NODE_REST_API_URL, this.httpOptions);

    console.log('[MovieService][getGenres][END]');
    return observable;
  }

  getMoviesByGenre(genreId: number) {
    const apiUrl = environment.NODE_REST_API_URL + '/' + genreId + '/movies';

    console.log('[MovieService][getMoviesByGenre][START]');
    console.log('[MovieService][getMoviesByGenre][genreId: ' + genreId + ']');
    console.log('[MovieService][getMoviesByGenre][apiUrl: ' + apiUrl + ']');

    const observable = this.httpClient.get(apiUrl, this.httpOptions);

    console.log('[MovieService][getMoviesByGenre][END]');
    return observable;
  }


}
