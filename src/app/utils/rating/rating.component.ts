import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5;

  @Input()
  selectedRating = 0;

  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  maxRatingArr = [];
  previousRating = 0;

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number): void {
    this.setSelectedRating(index);
  }

  handleMouseLeave() {
    if (this.previousRating !== 0) this.selectedRating = this.previousRating;
    else this.selectedRating = 0;
  }

  setSelectedRating(index: number): void {
    this.selectedRating = index + 1;
  }

  rate(index: number): void {
    this.setSelectedRating(index);
    this.previousRating = this.selectedRating;
    this.rated.emit(this.selectedRating);
  }
}
