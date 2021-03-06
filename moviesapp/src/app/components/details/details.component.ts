import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, Cast } from '../../interface/interface';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() id;
  // I assign this variable at empty object for avoid issues
  movieDetail: MovieDetail = {};
  actors: Cast [] = [];
  hide: 50;
  existMovie = false;
  star = 'star-outline';

  slideOptActors = {
    slidesPerView: 2.8,
    freeMode: true,
    spacebetween: -5
  }

  constructor(private moviesService: MoviesService,
              private modalController: ModalController,
              private dataLocalService: DataLocalService) { }

  ngOnInit() {
    this.dataLocalService.existMovie(this.id)
    .then(exist => this.star = ( exist ) ? 'star' : 'star-outline');

    this.moviesService.getMovieDetail(this.id)
    .subscribe(resp => {
      console.log(resp);
      this.movieDetail = resp;
    });
    this.moviesService.getActorDetail(this.id)
    .subscribe(resp => {
      console.log(resp);
      this.actors = resp.cast;
    });
  }
  async getBack() {
    this.modalController.dismiss();
  }
  favourite() {
    console.log('click', this.movieDetail.title);
    const exist = this.dataLocalService.saveMovie(this.movieDetail);
    this.star = ( exist ) ? 'star' : 'star-outline';
  }
}
