import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @Input('hotels') hotels : any[];
  constructor() { }

  ngOnInit() {
  }

}
