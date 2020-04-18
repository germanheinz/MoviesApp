import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPipe } from './images.pipe';
import { PairsPipe } from './pairs.pipe';



@NgModule({
  declarations: [ImagesPipe, PairsPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImagesPipe,
    PairsPipe
  ]
})
export class PipesModule { }
