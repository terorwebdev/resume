import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  mediasocial = [
    {
      id: 1,
      title: 'facebook',
      img: 'assets/image/mediasociallogo/facebook.png',
      url: 'https://www.facebook.com/mohdiskandarsamsuddin'
    },
    {
      id: 2,
      title: 'instagram',
      img: 'assets/image/mediasociallogo/insta.png',
      url: 'https://www.instagram.com/kandaiiskandar'
    },
    {
      id: 3,
      title: 'twitter',
      img: 'assets/image/mediasociallogo/twitter.png',
      url: 'https://twitter.com/kandaiiskandar'
    },
    {
      id: 4,
      title: 'linkin',
      img: 'assets/image/mediasociallogo/linkedIn.png',
      url: 'https://www.linkedin.com/in/mohd-iskandar-samsuddin/'
    },
    {
      id: 5,
      title: 'github',
      img: 'assets/image/mediasociallogo/GitHub.png',
      url: 'https://github.com/terorwebdev'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, '_blank');
  }

}
