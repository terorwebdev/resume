import { Component, OnInit } from '@angular/core';
import { MediaComponent } from './../../modals/media/media.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-techskills',
  templateUrl: './techskills.component.html',
  styleUrls: ['./techskills.component.css'],
})
export class TechskillsComponent implements OnInit {
  webFramework = [
    'Phoenix',
    'Chicago Boss',
    'Django',
    'Angular JS and IO',
    'NodeJS',
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
    'Microservice – Docker',
  ];

  mediaData = [
    {
      id: 1,
      title: 'Virtual Brainstorming Platfrom Concept',
      type: 'image',
      data: 'assets/image/profile/collabimage.jpg',
    },
    {
      id: 2,
      title: 'Virtual Brainstorming Platfrom Demo',
      type: 'video',
      data: 'assets/video/profile/collabvideo.mp4',
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  open(id) {
    let openThis = this.mediaData.filter((item) => item.id === id);

    let dialogRef = this.dialog.open(MediaComponent, {
      width: '80%',
      height: '80%',
      data: openThis[0],
    });

    dialogRef.afterClosed().subscribe((result) => {
      const incoming = result;
    });
  }
}
