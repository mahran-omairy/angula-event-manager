import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event} from '../event.interface';
import { ViewComponent } from '../view/view.component';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openEvent(): void {
    this.dialog.open(ViewComponent, {
      width: '500px',
      data: {...this.event}
    });
  }
  openConfirm(): void {
    const dialogRef = this.dialog.open(ConfirmComponent,);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
