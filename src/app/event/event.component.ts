import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event } from '../event.interface';
import { ViewComponent } from '../view/view.component';
import { ConfirmComponent } from '../confirm/confirm.component';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  storeDoc: AngularFirestoreDocument<Event>;

  constructor(
    public dialog: MatDialog,
    private store: AngularFirestore,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  openEvent(): void {
    this.dialog.open(ViewComponent, {
      width: '500px',
      data: { ...this.event }
    });
  }
  openConfirm(): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.storeDoc = this.store.doc('events/' + this.event.id);
        this.storeDoc
          .delete()
          .then(res => {
            this.snackBar.open('Event was saved!', '', {
              duration: 2000,
              panelClass: ['success']
            });
          })
          .catch(er => {
            this.snackBar.open('Error saving the event!', '', {
              duration: 2000,
              panelClass: ['error']
            });
          });
      }
    });
  }
}
