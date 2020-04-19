import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input() id;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    console.log('id' + this.id);

    this.moviesService.getMovieDetail(this.id)
    .subscribe(resp => {
      console.log(resp);
    });
    this.moviesService.getActorDetail(this.id)
    .subscribe(resp => {
      console.log(resp);
    });
  }


}
