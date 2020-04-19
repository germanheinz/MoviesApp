import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, Cast } from '../../interface/interface';
import { ModalController } from '@ionic/angular';

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

  slideOptActors = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }

  constructor(private moviesService: MoviesService, private modalController: ModalController) { }

  ngOnInit() {
    console.log('id' + this.id);

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
  getBack(){
    this.modalController.dismiss();
  }


}
