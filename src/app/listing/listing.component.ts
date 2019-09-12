import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Event } from '../event.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  title = 'Events Manager';
  events: Event[];
  constructor(private store: AngularFirestore) {}

  ngOnInit() {
    this.store
      .collection('events')
      .snapshotChanges()
      .pipe(
        map(dataArray => {
          return dataArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            };
          });
        })
      )
      .subscribe((events: Event[]) => {
        this.events = events;
      });
  }
}
