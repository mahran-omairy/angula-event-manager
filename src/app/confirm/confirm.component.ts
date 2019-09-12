import { OnInit, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EventComponent>) {}

  ngOnInit() {}
}
