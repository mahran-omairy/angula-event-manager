import { Component, OnInit } from '@angular/core';
import { Event } from '../event.interface';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  title = 'Events Manager';
  events: Event[] = [
    {
      id: 1,
      title: 'Buy food',
      date: '09-10-2019',
      color: '#836120',
      description: ''
    },
    {
      id: 2,
      title: 'Buy car',
      date: '09-11-2019',
      color: '#935753',
      description: ''
    },
    {
      id: 3,
      title: 'Buy home',
      date: '09-12-2019',
      color: '#345879',
      description: ''
    },
    {
      id: 4,
      title: 'Buy shoes',
      date: '09-13-2019',
      color: '#643789',
      description: ''
    },
    {
      id: 5,
      title: 'Buy key',
      date: '09-14-2019',
      color: '#753980',
      description: ''
    }
  ];
  constructor() {}

  ngOnInit() {}
}
