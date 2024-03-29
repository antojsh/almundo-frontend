import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input('amount') amount;
  numbers

  constructor() { }

  ngOnInit() {
  }

  get amountArray() {
    return this.numbers = Array(parseInt(this.amount))
  }

}
