import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('filters') filters;

  @Output() filter = new EventEmitter();

  stars = [
    {
      selected: true,
      value: "all",
      showStar: false,
      text: "Todas las estrellas"
    },
    {
      selected: false,
      value: 5,
      showStar: true
    },
    {
      selected: false,
      value: 4,
      showStar: true
    },
    {
      selected: false,
      value: 3,
      showStar: true
    },
    {
      selected: false,
      value: 2,
      showStar: true
    },
    {
      selected: false,
      value: 1,
      showStar: true
    }
  ]

  showFilters = {
    showAllFilters: true,
    showName: true,
    showStars: true
  }

  constructor() { }

  ngOnInit() {
    this.getHotels()
  }


  getHotels() {
    this.filter.emit({ filters: this.filters, stars: this.stars })
  }

  toggleFilter(type) {
    console.log(type)
    this.showFilters[type] = !this.showFilters[type]
  }
}
