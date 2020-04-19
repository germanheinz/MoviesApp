import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interface/interface';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() moviesFromFather: Movie[] = [];

  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -20
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
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
