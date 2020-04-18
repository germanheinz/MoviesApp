import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const url = environment.imgUrl;

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return 'assets/no-img.jpg';
    }
    const imgUrl = `${url}/${size}${img}`;
    // console.log(imgUrl);
    return imgUrl;
  }

  

}
