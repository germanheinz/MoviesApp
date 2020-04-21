import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interface/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slidesView: number;

  latestMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  slidesOpts = {
    slidesPerView: 5,
    freeMode: true
  };

  constructor(private moviesService: MoviesService) {this.checkScreen();}

  ngOnInit(): void {
    this.moviesService.getMoviesInTheatre()
    .subscribe(resp => {
      // console.log(resp);
      this.latestMovies = resp.results;
    });
    this.getPopulateMovies();
  }
  loadMore(){
    this.getPopulateMovies();
  }

  getPopulateMovies() {
    this.moviesService.getPopularMovies()
    .subscribe(resp => {
      console.log(resp);
      const arrTemp = [ ...this.popularMovies, ...resp.results];
      this.popularMovies = arrTemp;
    });
  }
  checkScreen() {
    if (window.innerWidth >= 960) {
      return this.slidesView = 2.125;
    } else {
        return 1.125;
    }
}
}
