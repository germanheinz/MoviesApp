import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMovieDB, Movie, MovieDetail, ResponseCredits } from '../interface/interface';
import { environment } from '../../environments/environment.prod';

const URL = environment.url;
const URL_IMG = environment.imgUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPage = 0;
  genres: any[] = [];
  constructor(private http: HttpClient) { }

  private executeQuery<t>(query: string) {
    query = URL + query;
    query += `&api_key=${API_KEY}&language=en&include_image_lenguage=en`;
    //  console.log(query);
    return this.http.get<t>(query);
  }

  getMoviesInTheatre() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const mes = today.getMonth();

    let mesString;
    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }
    const startDate = `${today.getFullYear()}-${mesString}-01`;
    const endDate = `${today.getFullYear()}-${mesString}-${lastDay}`;
    return this.executeQuery<ResponseMovieDB>(`/discover/movie?primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`);
  }
  getPopularMovies() {
    this.popularPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.executeQuery<ResponseMovieDB>(query);
  }
  getMovieDetail(id: string){
    return this.executeQuery<MovieDetail>(`/movie/${id}?a=1`);
  }
  getActorDetail(id: string){
    return this.executeQuery<ResponseCredits>(`/movie/${id}/credits?a=1`);
  }
  searchMovie(query: string) {
    return this.executeQuery<Movie>(`/search/movie?query=${query}`);
  }
  getGenres(): Promise<any[]> {
    return new Promise(resolve => {
      this.executeQuery(`/genre/movie/list?a=1`)
      .subscribe(resp => {
        this.genres = resp['genres'];
        resolve(this.genres);
      });
    });
  }
}
