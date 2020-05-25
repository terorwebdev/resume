import { WelcomeComponent } from './../modals/welcome/welcome.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  opened: true;
  toolbarSize = { height: '360px', 'max-height': '360px' };
  logoActivate = false;
  widthsize = null;

  menuBar = [
    {
      id: 1,
      route: 'aboutme',
      name: 'About Me',
    },
    {
      id: 2,
      route: 'mycareer',
      name: 'Career',
    },
    {
      id: 3,
      route: 'tech',
      name: 'Skills',
    },
    {
      id: 4,
      route: 'mystudy',
      name: 'Certificates',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.widthsize = event.target.innerWidth;
    this.size('width', event.target.innerWidth);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (event.target.scrollTop === 0) {
      // top
      this.size('scroll', 0);
    } else {
      // scroll detect
      this.size('scroll', 1);
    }

    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      console.log('End');
    }
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.size('width', window.innerWidth);
    this.openWelcome();
  }

  openWelcome() {
    let dialogRef = this.dialog.open(WelcomeComponent, {
      width: 'auto',
      height: 'auto',
      data: '',
    });

    dialogRef.afterClosed().subscribe((result) => {
      const incoming = result;
    });
  }

  size(type, size) {
    if (type === 'width') {
      if (size > 1000) {
        this.logoActivate = false;
        this.toolbarSize = { height: '360px', 'max-height': '360px' };
      }

      if (size > 775 && size <= 1000) {
        this.logoActivate = true;
        this.toolbarSize = { height: '280px', 'max-height': '280px' };
      }

      if (size > 555 && size <= 775) {
        this.logoActivate = true;
        this.toolbarSize = { height: '230px', 'max-height': '230px' };
      }

      if (size <= 555) {
        this.logoActivate = true;
        this.toolbarSize = { height: '190px', 'max-height': '190px' };
      }
    }

    if (type === 'scroll') {
      if (size === 0) {
        this.size('width', this.widthsize);
      }

      if (size === 1) {
        this.toolbarSize = { height: '190px', 'max-height': '190px' };
      }

    }
  }
}
