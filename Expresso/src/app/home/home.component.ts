import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [  
    { img: "../assets/images/1.png" },  
    { img: "../assets/images/2.png" },  
    { img: "../assets/images/3.png" },  
    { img: "../assets/images/4.png" },  
    { img: "../assets/images/5.png" },  
    { img: "../assets/images/6.png" },  
    { img: "../assets/images/7.png" },  
    { img: "../assets/images/8.png" },  
    { img: "../assets/images/9.png" },  
  ];  
  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  };  
}
