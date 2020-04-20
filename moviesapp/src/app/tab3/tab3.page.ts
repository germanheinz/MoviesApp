import { Component, OnInit } from '@angular/core';
import { MovieDetail, Genre } from '../interface/interface';
import { MoviesService } from '../services/movies.service';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  movies: MovieDetail[] = [];
  genres: Genre[] = [];
  favouriteByGenre: any[] = [];
  constructor(private moviesService: MoviesService, private dataLocalService: DataLocalService) {}

  async ionViewWillEnter(){
    this.movies = await this.dataLocalService.loadFavourites();
    this.genres = await this.moviesService.getGenres();
    this.moviesByGenre(this.genres, this.movies);
  }
  moviesByGenre(genres: Genre[], movies: MovieDetail[]){
    this.favouriteByGenre = [];
    genres.forEach( genre => {
      this.favouriteByGenre.push({
        genre: genre.name,
        movie: movies.filter(movie => {
          return movie.genres.find( genreResponse => genreResponse.id === genre.id);
        })
      });
    });
    console.log(this.favouriteByGenre);
  }

}
