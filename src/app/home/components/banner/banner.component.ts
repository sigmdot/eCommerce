import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public slides = [
    { src: 'assets/images/banner-1.jpg' },
    { src: 'assets/images/banner-2.jpg' },
    { src: 'assets/images/banner-3.jpg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
