import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider-component.component.html',
  styleUrls: ['./image-slider-component.component.css'],

})

export class ImageSliderComponent  {

  slides: string [] = ['./assets/images/caña.jpg', './assets/images/cappuccino.jpg', './assets/images/bar2.jpg' ]
  i=0;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? this.slides.length -1 : this.i - 1;
  }
//edit here    
  getNext() {
    
      this.i = this.i===this.slides.length -1 ? 0: this.i + 1;
    
  }


}