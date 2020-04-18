import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interface/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  latestMovies: Movie[] = [];
  slidesOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesInTheatre()
    .subscribe(resp => {
      // console.log(resp);
      this.latestMovies = resp.results;
    });
  }



}
