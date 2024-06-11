import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utils/rating/rating.component';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent;

  @Input()
  text: string;

  timer: ReturnType<typeof setInterval>;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  // Access component content
  ngAfterViewInit(): void {
    console.log('after view init')
    this.ratingComponent.selectedRating = 3;
    this.changeDetectorRef.detectChanges();
  }
  ngDoCheck(): void {
    console.log('do check')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes })
  }
  ngOnDestroy(): void {
    console.log('on destroy')
    clearInterval(this.timer);
  }
  ngOnInit(): void {
    console.log('on init')
    // this.ratingComponent.selectedRating = 3;
    this.timer = setInterval(() => console.log(new Date()), 1000);
  }
}
