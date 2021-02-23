import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from './carrosuel.animation';

@Component({
  selector: 'app-carrosuel',
  templateUrl: './carrosuel.component.html',
  styleUrls: ['./carrosuel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn)]),
      transition('* => void', [useAnimation(fadeOut)])
    ])
  ]
})
export class CarrosuelComponent implements OnInit {
  currentSlide = 0;

  constructor() { }
  @Input() slides;
  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
