import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { EventComponent } from './event/event.component';
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    EditComponent,
    ViewComponent,
    EventComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ViewComponent, ConfirmComponent]
})
export class AppModule { }
