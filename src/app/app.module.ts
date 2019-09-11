import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { EventComponent } from './event/event.component';
import { ConfirmComponent } from './confirm/confirm.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    EditComponent,
    ViewComponent,
    EventComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ViewComponent, ConfirmComponent]
})
export class AppModule { }
