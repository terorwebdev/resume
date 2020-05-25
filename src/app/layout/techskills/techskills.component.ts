import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techskills',
  templateUrl: './techskills.component.html',
  styleUrls: ['./techskills.component.css']
})
export class TechskillsComponent implements OnInit {

  webFramework = [
    'Phoenix',
    'Chicago Boss',
    'Django',
    'Angular JS and IO',
    'NodeJS'
  ];

  programming = [
    'TypeScript – 80%',
    'JavaScript – 90%',
    'Elixir – 70%',
    'Erlang – 80%',
    'Python – 50%',
  ];

  technostack = [
    'Linux Operating System – Ubuntu',
    'Distributed System Development',
    'Umbrealla Project',
    'Embedded System – IoT',
    'Data Engineering – System Integration',
    'SQL and NOSQL Database – JSON',
    'Content Delivery Network – CDN',
    'Microservice – Docker'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
