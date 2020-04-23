import { Injectable } from '@angular/core';
import { MovieDetail } from '../interface/interface';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  movies: MovieDetail[] = [];
  constructor(public storage: Storage, public toastController: ToastController) {this.loadFavourites();}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  saveMovie(movie: MovieDetail) {
    let exist = false;
    let message = '';
    for (const film of this.movies){
      if (film.id === movie.id){
        exist = true;
      }
    }
    if (exist) {
      this.movies = this.movies.filter(film => film.id !== movie.id);
      message = 'Your movie is removed of Favourites';
    } else {
      this.movies.push(movie);
      message = 'Your movie is saved in favourites';
    }
    this.presentToast(message);
    this.storage.set('movies', this.movies);
    return !exist;
  }
  async loadFavourites(){
    const movies = await this.storage.get('movies');
    this.movies = movies;
    return this.movies;
  }
  async existMovie(id) {
    id = Number(id);
    await this.loadFavourites();
    const exist = this.movies.find(film => film.id === id);
    return (exist) ? true : false;
  }
}
