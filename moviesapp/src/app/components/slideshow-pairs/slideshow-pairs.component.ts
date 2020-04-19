import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Movie } from '../../interface/interface';

import { IonSlides, ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';


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
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClick() {
    console.log('click');
    this.loadMore.emit();
  }
  async details(id: string) {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }
  }

