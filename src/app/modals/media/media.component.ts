import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MediaContent {
  id: number;
  title: string;
  type: string;
  data: string;
}

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {

  viewThis: MediaContent;

  constructor(
    public dialogRef: MatDialogRef<MediaComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.viewThis = data;
  }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close({ event: 'Cancel' , data:  ''});
  }

}
