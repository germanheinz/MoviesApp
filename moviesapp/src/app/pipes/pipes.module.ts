import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPipe } from './images.pipe';
import { PairsPipe } from './pairs.pipe';
import { FilterImagePipe } from './filter-image.pipe';



@NgModule({
  declarations: [ImagesPipe, PairsPipe, FilterImagePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImagesPipe,
    PairsPipe,
    FilterImagePipe
  ]
})
export class PipesModule { }
