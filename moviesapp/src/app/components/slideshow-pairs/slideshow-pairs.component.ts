import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interface/interface';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  @Input() moviesFromFather: Movie[] = [];

  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -30
  };
  constructor() { }

  ngOnInit() {}

}
