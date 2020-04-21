import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../../interface/interface';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() moviesFromFather: Movie[] = [];
  @Input() slidesView: number;
  slidesOpts = {
    initialSlide: 1,
    slidesPerView: 1.7,
    freeMode: true,
    spaceBetween: 0
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {console.log('SLIDE!!!!****', this.slidesView);}
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
