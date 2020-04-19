import { Component, OnInit, Input } from '@angular/core';
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

  slidesOpts = {
    slidesPerView: 1.1,
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
