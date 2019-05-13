import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotels: any[] = [];
  filters = {
    name: ""
  }

  constructor(public rest: RestApiService) { }

  ngOnInit() {

  }

  getHotels(ev) {
    this.hotels = []
    let filter = { stars: this.buildStars(ev.stars) }
    if (ev.filters.name != '') {
      filter['name'] = ev.filters.name
    }
    this.rest.getHotels(filter).subscribe((hotels) => {
      this.hotels = hotels.rows
      console.log(this.hotels)
    })
  }

  private buildStars(stars) {
    return stars[0].selected ? "1,2,3,4,5" : stars.map(x => {
      return x.selected && x.value != "all" ? x.value : null;
    }).filter(x => x)
  }

}
