import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../interface/interface';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Output() load = new EventEmitter<boolean>();
  @Input() moviesFromFather: Movie[] = [];

  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
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
    modal.onDidDismiss().then(data => {
      this.load.emit(true);
    });
    return await modal.present();
  }
}
