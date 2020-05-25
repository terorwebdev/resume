import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystudy',
  templateUrl: './mystudy.component.html',
  styleUrls: ['./mystudy.component.css']
})
export class MystudyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(){
    // your logic here.... like set the url
    const url = 'https://simsweb.uitm.edu.my/sportal_app/graduat/';
    window.open(url, '_blank');
  }

}
