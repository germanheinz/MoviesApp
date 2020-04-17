import { Pipe, PipeTransform } from '@angular/core';

const url = 'https://image.tmdb.org/t/p';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return 'assets/no-img.jpg';
    }
    const imgUrl = `${url}/${size}${img}`;
    console.log(imgUrl);
    return imgUrl;
  }

  

}
