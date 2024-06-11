import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.list);
  }

  @Input()
  list;
}
