import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Movie } from '../../interface/interface';

import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  @Input() moviesFromFather: Movie[] = [];
  
  @Output() loadMore = new EventEmitter<any>();
  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -30
  };
  constructor() { }

  ngOnInit() {}

  onClick() {
    console.log('click');
    this.loadMore.emit();
  }
  }

