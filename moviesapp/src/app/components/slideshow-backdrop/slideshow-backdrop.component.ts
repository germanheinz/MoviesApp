import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interface/interface';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() moviesFromFather: Movie[] = [];

  slidesOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
