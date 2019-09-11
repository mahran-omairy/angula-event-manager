import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'add',
    component: EditComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
