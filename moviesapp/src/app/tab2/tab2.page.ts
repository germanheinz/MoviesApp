import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interface/interface';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textSearch = '';
  tags: string[] = ['The Lord Of The Rings', 'Avenger', 'The piano', 'Squad Elite'];
  movies: Movie[] = [];
  searching = false;
  latestMovies: Movie[] = [];
  constructor(private moviesService: MoviesService, private modalController: ModalController) {
    
  }

  search(event) {
    this.searching = true;
    const value: string = event.detail.value;
    if (value.length === 0) {
      this.searching = false;
      this.movies = [];
      return;
    }
    this.moviesService.searchMovie(value)
    .subscribe(resp => {
      this.movies = resp['results'];
    });
    this.searching = false;
  }
  async movieDetail(id: string) {
      const modal = await this.modalController.create({
        component: DetailsComponent,
        componentProps: {
          id
        }
      });
      return await modal.present();
    }
    
  }
