import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../event.interface';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  title = new FormControl('', [Validators.required]);
  minDate = new Date(new Date().getFullYear(), 0, 1);
  date = new FormControl(new Date(), [Validators.required]);
  description = new FormControl('', [Validators.required]);
  color = new FormControl('#ff0000', [Validators.required]);
  id: string = null;
  storeDoc: AngularFirestoreDocument<Event>;
  constructor(
    private activedRoute: ActivatedRoute,
    private store: AngularFirestore,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // check if this is update
    this.activedRoute.url.subscribe(UrlSegments => {
      if (UrlSegments[0].path === 'edit') {
        // check if the id paramter exsits
        this.activedRoute.params.subscribe(params => {
          if (params.id) {
            // init store document
            this.storeDoc = this.store.doc('events/' + params.id);
            // load data
            this.storeDoc
              .valueChanges()
              .pipe(map(doc => ({ id: params.id, ...doc })))
              .subscribe((event: Event) => {
                this.title.setValue(event.title);
                this.date.setValue(new Date(event.date));
                this.description.setValue(event.description);
                this.color.setValue(event.color);
              });
            this.id = params.id;
          }
        });
      }
    });
  }
  getErrorMessage(formControl: FormControl): string {
    return formControl.hasError('required') ? 'You must enter a value' : '';
  }

  isValidForm(): boolean {
    return !(
      this.title.hasError('required') ||
      this.date.hasError('required') ||
      this.description.hasError('required') ||
      this.color.hasError('required')
    );
  }
  storeEvent(): void {
    // build correct time format
    const timeStamp = new Date(this.date.value);
    const chosenDate =
      timeStamp.getMonth() +
      1 +
      '/' +
      timeStamp.getDate() +
      '/' +
      timeStamp.getFullYear();
    // build the event object
    const event = {
      title: this.title.value,
      date: chosenDate,
      color: this.color.value,
      description: this.description.value
    };
    // update or create new object
    if (this.id !== null) {
      this.storeDoc
        .update(event)
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
    } else {
      this.store
        .collection('events')
        .add(event)
        .then(res => {
          this.snackBar.open('Event was saved!', '', {
            duration: 2000,
            panelClass: ['success']
          });
          this.title.reset();
          this.date.reset();
          this.description.reset();
          this.color.reset();
        })
        .catch(er => {
          this.snackBar.open('Error saving the event!', '', {
            duration: 2000,
            panelClass: ['error']
          });
        });
    }
  }
}
