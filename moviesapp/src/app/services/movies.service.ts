import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMovieDB } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMoviesInTheatre(){
    return this.http.get<ResponseMovieDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-01-03&api_key=81f888823f079b9941a4534f90d59f34&language=en`);
  }
}
