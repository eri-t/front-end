import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descriptive-card',
  templateUrl: './descriptive-card.component.html',
  styleUrls: ['./descriptive-card.component.scss']
})
export class DescriptiveCardComponent {
  @Input()
  title;
  @Input()
  image;
  @Input()
  description;
}
