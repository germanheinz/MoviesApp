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
  @Output() load = new EventEmitter<any>();
  @Output() loadMore = new EventEmitter<any>();
  slidesOpts = {
    slidesPerView: 4.5,
    freeMode: true,
    spaceBetween: -10
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
    modal.onDidDismiss().then(data => {
      this.load.emit(data);
    });
    return await modal.present();
  }
  }

