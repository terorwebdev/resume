import { MediaComponent } from './../../modals/media/media.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mystudy',
  templateUrl: './mystudy.component.html',
  styleUrls: ['./mystudy.component.css']
})
export class MystudyComponent implements OnInit {

  mediaData = [
    {
      id: 1,
      title: 'Big Data Engineering',
      type: 'image',
      data: '/assets/image/profile/bigdata.png'
    },
    {
      id: 2,
      title: 'Cisco CCNA',
      type: 'image',
      data: ''
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  open(id) {
    let openThis = this.mediaData.filter(
      (item) => item.id === id
    );

    let dialogRef = this.dialog.open(MediaComponent, {
      width: '80%',
      height: '80%',
      data: openThis[0]
    });

    dialogRef.afterClosed().subscribe((result) => {
      const incoming = result;
    });
  }

  onNavigate(){
    // your logic here.... like set the url
    const url = 'https://simsweb.uitm.edu.my/sportal_app/graduat/';
    window.open(url, '_blank');
  }

}
