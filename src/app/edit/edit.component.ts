import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  title = new FormControl('', [Validators.required]);
  minDate = new Date(new Date().getFullYear(), 0, 1);
  date = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  color = '#ff0000';

  activedRoute: ActivatedRoute;

  constructor( activedRoute: ActivatedRoute ) {
    this.date.setValue(new Date());
    this.activedRoute = activedRoute;
  }

  ngOnInit() {
    this.activedRoute.params.subscribe((params) => {
      console.log(params.id);
    });
  }
  getTitleErrorMessage(): string {
    return this.title.hasError('required') ? 'You must enter a value' : '';
  }
  getDateErrorMessage(): string {
    return this.date.hasError('required') ? 'You must enter a value' : '';
  }
  getDescErrorMessage(): string {
    return this.description.hasError('required')
      ? 'You must enter a value'
      : '';
  }
  isValidForm(): boolean {
    return !(
      this.title.hasError('required') ||
      this.date.hasError('required') ||
      this.description.hasError('required')
    );
  }
}
