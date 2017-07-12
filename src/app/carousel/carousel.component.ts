import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  carouselSelector : number;
  projects = [
    {id: 1, title:'Superman'},
    {id: 2, title:'Batman'},
    {id: 5, title:'BatGirl'},
    {id: 3, title:'Robin'},
    {id: 4, title:'Flash'}
  ];

  stuff(){
    console.log(this.carouselSelector);
    this.owlElement.to([3,300]);
  }

  hoverSelect(index) {
    this.owlElement.to([index,300]);
  }

  constructor() { }

  ngOnInit() {
  }

}
